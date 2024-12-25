"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import EventCard from "@/components/eventcard/EventCard";
import {Skeleton} from 'antd'; 



const setDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return formattedDate.replace(/(\d{1,2}) (\w{3})/, '$2 $1,'); // Rearranging to "Dec 12, 2024"
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
  const hasFetched = useRef(false);

  const initialURL =
    "https://gdg.community.dev/api/event_slim/for_chapter/1915/?page_size=3&status=Completed&order=-start_date&fields=title,start_date,event_type_title,cropped_picture_url,slug";

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

  useEffect(() => {
    if (!hasFetched.current) {
      fetchEvents(initialURL);
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
  );
};

export default EventsPage;
