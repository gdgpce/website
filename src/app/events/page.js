"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import EventCard from "@/components/eventcard/EventCard";
import { Button } from "antd";

const EventList = () => {
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

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {events.map((event) => (
        <EventCard
          key={event.slug}
          slug={event.slug}
          date={new Date(event.start_date).toLocaleDateString()}
          eventType={event.event_type_title}
          title={event.title}
          imageUrl={event.cropped_picture_url}
        />
      ))}
      {nextPage && (
        <Button onClick={() => fetchEvents(nextPage)} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

const EventsPage = () => {
  return (
    <div>
      <div className={styles.headerCon}>
        <Breadcrumb title="Events" />
      </div>
      <div className={styles.cardCon}>
        <EventList />
        
      </div>
    </div>
  );
};

export default EventsPage;
