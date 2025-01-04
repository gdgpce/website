"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import EventCard from "@/components/eventcard/EventCard";
import { DottedDash } from "@/components/dash/Dash";
import { Skeleton } from "antd";
import Link from "next/link";
// import {Image} from "@nextui-org/react";

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
          <Skeleton.Node
          active={true}
          style={{
            width: 200,
            height: 150,
            backgroundImage:"linear-gradient(to right, rgb(17 10 70 / 6%) 25%, rgb(44 25 102 / 45%) 37%, rgb(114 82 246 / 60%) 63%)"
          }}
          
        />
        <Skeleton style={{
            width: 200,
          }} />
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
    "https://gdg.community.dev/api/event_slim/for_chapter/1915/?page_size=3&status=Completed&order=-start_date&fields=title,start_date,event_type_title,picture,slug,description_short";

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
        setUpcomingEvent(data.results); 
        setNoUpcomingEvents(false); // Reset no upcoming events flag
      } else {
        setNoUpcomingEvents(true); // Set flag for no upcoming events
      }
    } catch (err) {
      setNoUpcomingEvents(true);
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
      <Breadcrumb title="Events" />
      <div className={styles.page}>
        <div className={styles.headings}>
          <div className={styles.mainhead}>Upcoming Events</div>
          <DottedDash />
        </div>

        <div className={styles.upcomingEvents}>
        {noUpcomingEvents ? (
              <p className={styles.noUpcomingEventMessage}>No events are scheduled at this time. Keep an eye out for future announcements!</p>
          ) : (
            upcomingEvent?.map((event, index) => (
              <div key={index} className={styles.upcomingEventItem}>
              <img src={event.picture} alt="event" />
              <div className={styles.upcomingEventItemContent}>
                <div className={styles.upcomingEventItemSubTitle}><span>{setDate(event.start_date)}</span> {event.event_type_title}</div>
                <div className={styles.upcomingEventItemTitle}>{event.title}</div>
                <div className={styles.upcomingEventItemDesc}>{event.description_short}</div>
                <Link href={"/events/" + event.slug} className={styles.upcomingEventItemBtn}>Learn More</Link>
              </div>
            </div>
            ))
          )}
          {/* <div className={styles.upcomingEventItem}>
            <img src="/temp/pic.webp" alt="event" />
            <div className={styles.upcomingEventItemContent}>
              <div className={styles.upcomingEventItemSubTitle}><span>Dec 17, 2024</span> Workshop / Study Group</div>
              <div className={styles.upcomingEventItemTitle}>Tech Winter Break GDG On Campus PCE : Android Dev Workshop</div>
              <div className={styles.upcomingEventItemDesc}>
                Learn to build your own Android apps from scratch using Android Studio and Kotlin in just 2 days! The workshop is perfect for those who are curious about mobile app development but don’t know where to start.
              </div>
              <Link href="/events/upcoming-event" className={styles.upcomingEventItemBtn}>Learn More</Link>
            </div>
          </div> */}
              {/* <p className={styles.noUpcomingEventMessage}>No events are scheduled at this time. Keep an eye out for future announcements!</p> */}
        </div>

        <div className={styles.headings}>
          <div className={styles.mainhead}>Past Events</div>
          <DottedDash />
        </div>

        {/* Dynamic Section for Past Events */}
        <div className={styles.cardCon}>
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

        {/* <div>
            <Skeleton.Node
            active={true}
            style={{
              width: 200,
              height: 150,
              backgroundImage:"linear-gradient(to right, rgb(17 10 70 / 6%) 25%, rgb(44 25 102 / 45%) 37%, rgb(114 82 246 / 60%) 63%)"
            }}
          />
          <Skeleton style={{
              width: 200,
              backgroundImage:"linear-gradient(to right, rgb(17 10 70 / 6%) 25%, rgb(44 25 102 / 45%) 37%, rgb(114 82 246 / 60%) 63%)"
            }} />
          </div> */}
      </div>
    </div>
  );
};

export default EventsPage;
