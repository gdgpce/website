"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import EventCard from "@/components/eventcard/EventCard"; // Ensure this is used correctly
import { Skeleton } from "antd";

const setDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return formattedDate.replace(/(\d{1,2}) (\w{3})/, "$2 $1,"); // Rearranging to "Dec 12, 2024"
};

const EventList = ({ events, loading, error }) => {
  return (
    <>
      {loading && (
        <div>
          <Skeleton active={true} style={{ width: 200, height: 150 }} />
          <Skeleton style={{ width: 200 }} />
        </div>
      )}
      {error && <p>Error: {error.message}</p>}
      <div className={styles.eventCardsContainer}>
        {events.map((event) => (
          <EventCard
            key={event.slug}
            slug={event.slug}
            date={setDate(event.start_date)}
            eventType={event.event_type_title}
            title={event.title}
            imageUrl={event.cropped_picture_url}
          />
        ))}
      </div>
    </>
  );
};

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [noUpcomingEvents, setNoUpcomingEvents] = useState(false);
  const hasFetched = useRef(false);

  const initialURL =
    "https://gdg.community.dev/api/event_slim/for_chapter/1915/?page_size=3&status=Completed&order=-start_date&fields=title,start_date,event_type_title,cropped_picture_url,slug";

  const upcomingURL =
    "https://gdg.community.dev/api/event_slim/for_chapter/1915/?page_size=1&status=Completed&fields=title,start_date,event_type_title,cropped_picture_url,slug,description";

  const fetchEvents = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.status}`);
      }
      const data = await response.json();
      setEvents((prev) => [...prev, ...data.results]);
      setNextPage(data.links?.next || null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUpcomingEvent = async () => {
    try {
      const response = await fetch(upcomingURL);
      if (!response.ok) {
        throw new Error(`Failed to fetch upcoming event: ${response.status}`);
      }
      const data = await response.json();
      
      if (data.results.length > 0) {
        setUpcomingEvent(data.results[0]); // Set the first upcoming event
        setNoUpcomingEvents(false); // Reset no upcoming events flag
      } else {
        setNoUpcomingEvents(true); // Set flag for no upcoming events
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      fetchEvents(initialURL);
      fetchUpcomingEvent(); // Fetch upcoming event when component mounts
      hasFetched.current = true;
    }
  }, []);

  const handleLoadMore = () => {
    if (nextPage) {
      fetchEvents(nextPage);
    }
  };

  return (
    <div>
      <div className={styles.headerCon}>
        <Breadcrumb title="Events" />
      </div>

      {/* Dynamic Section for Upcoming Event */}
      <div className={styles.cardCon}>
        <h2 className={styles.upcomingEventTitle}>Upcoming Event</h2>

        {noUpcomingEvents ? (
            <p className={styles.noUpcomingEventMessage}>No events are scheduled at this time. Keep an eye out for future announcements!</p>
        ) : (
          upcomingEvent && (
            <div className={styles.eventCardContainer}>
              <div className={styles.imageWrapper}>
                <img
                  src={upcomingEvent.cropped_picture_url || "https://via.placeholder.com/150"}
                  alt={upcomingEvent.title || "Upcoming Event"}
                  className={styles.image}
                />
              </div>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}>{upcomingEvent.title}</h3>
                <p className={styles.eventDate}>{setDate(upcomingEvent.start_date)}</p>
                <p className={styles.eventDescription}>
                  {upcomingEvent.description || "No description available."}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Dynamic Section for Past Events */}
      <div className={styles.cardCon}>
        <h2>Past Events</h2>
        <EventList events={events} loading={loading} error={error} />
        {nextPage && (
          <div className={styles.loadMoreButtonContainer}>
            <button onClick={handleLoadMore} disabled={loading}>
              {loading ? "Loading..." : "Show More"}
            </button>
          </div>
        )}
      </div>

      {/* Google Calendar Iframe Section */}
      <div className={styles.calendarContainer}>
  <h2 className={styles.calendarHeading}>Event Calendar</h2> {/* Heading for the calendar */}
  <iframe 
    src="https://calendar.google.com/calendar/embed?src=6a3cfe19b2d8faa0ac66cf287a506e97630d1d7cc947bc6231696e7b4e49eb70%40group.calendar.google.com&ctz=Asia%2FKolkata&bgcolor=%23000000&color=%23FFFFFF" 
    style={{ border: '0', backgroundColor: '#000000' }} 
    width="800" 
    height="600" 
    frameBorder="0" 
    scrolling="no">
  </iframe>
</div>

    </div>
  );
};

export default EventsPage;
