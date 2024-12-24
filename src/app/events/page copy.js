"use client";
import styles from "./page.module.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import EventCard from "@/components/eventcard/EventCard";
import { Button } from "antd";

import {useEffect, useState} from "react";

const setDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };  
  return new Date(date).toLocaleDateString("en-US", options);
};

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://gdg.community.dev/api/event_slim/for_chapter/1915/?page_size=3&status=Completed&order=-start_date&fields=title,start_date,event_type_title,cropped_picture_url,slug&page=1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        // console.log(data.results);
        setEvents(data.results || []);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      {events.map((event) => (
        event.start_date = setDate(event.start_date),
        <EventCard
          slug={event.slug}
          date={event.start_date}
          eventType={event.event_type_title}
          title={event.title}
          imageUrl={event.cropped_picture_url}
        />
      ))}
    </>
  );
};



export default function Events() {
  return (
    <div>
      <div className={styles.headerCon}>
        <Breadcrumb title="Events" />
      </div>
    
      <div className={styles.cardCon}>
        <EventList />
        <button >Load More</button>
      </div>

    </div>
  );
}
