"use client";
import styles from "./page.module.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import EventCard from "@/components/eventcard/EventCard";

import React, {useEffect, useState} from "react";

const setDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: true };
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
          "https://gdg.community.dev/api/event_slim/for_chapter/1915/?page_size=4&status=Completed&include_cohosted_events=true&visible_on_parent_chapter_only=true&order=-start_date&fields=title,start_date,event_type_title,cropped_picture_url,cropped_banner_url,url,cohost_registration_url,description,description_short,static_url,slug&page=1"
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
        console.log(event.slug),
        <EventCard
          slug={event.slug}
          date={event.start_date}
          title={event.event_type_title}
          description={event.title}
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
        {/* <EventCard date="Dec 17, 2024" title="Workshop / Study Group" description="Tech Winter Break GDG On Campus PCE : Android Dev Workshop" imageUrl="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Android_Vymu04M.png"/> */}
      </div>

    </div>
  );
}
