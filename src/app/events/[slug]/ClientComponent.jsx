"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // for redirecting
import styles from "./page.module.css";
import {
    FacebookFilled,
    TwitterSquareFilled,
    LinkedinFilled,
    ShareAltOutlined,
    CalendarOutlined,
    UserOutlined,
} from "@ant-design/icons";

export default function ClientComponent({ event, speaker, error }) {
    const router = useRouter();  // Use for redirecting
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const [isSticky, setIsSticky] = useState(true);
    const [formattedDate, setFormattedDate] = useState("");

    // Redirect if error is true
    useEffect(() => {
        if (error) {
            router.push("/events");  // Redirect to /events page if error is true
        }
    }, [error, router]);

    // If error is true, render error message
    if (error) {
        return <p>Redirecting to events page...</p>;
    }

    useEffect(() => {
        // Format date on the client
        if (event?.start_date_iso) {
            const date = new Date(event.start_date_iso).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            });
            setFormattedDate(date);
        }
    }, [event?.start_date_iso]);

    useEffect(() => {
        const handleScroll = () => {
            if (!leftRef.current || !rightRef.current) return;

            const leftHeight = leftRef.current.scrollHeight;
            const scrollY = window.scrollY;

            setIsSticky(scrollY + window.innerHeight < leftHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <img src={event.cropped_banner_url} alt="banner" />
                <h1>{event.title}</h1>
                <p>{event.description_short}</p>
                <div className={styles.socialsShare}>
                    <FacebookFilled />
                    <TwitterSquareFilled />
                    <LinkedinFilled />
                    <ShareAltOutlined />
                </div>
            </div>
            <div className={styles.info}>
                <div>
                    <h4>
                        <CalendarOutlined /> {formattedDate}
                    </h4>
                    <h4>
                        <UserOutlined /> {event.total_attendees} Attendees
                    </h4>
                </div>
                <button>RSVP Now</button>
            </div>
            <div className={styles.section}>
                <div className={styles.left} ref={leftRef}>
                    <h1>About this event</h1>
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: event.description }}
                    ></div>
                </div>
                <div className={styles.right} ref={rightRef}>
                    <h1>Speaker</h1>
                    {speaker?.results?.map((result) => (
                        <div key={result.id} className={styles.speaker}>
                            <img
                                src={result.picture.thumbnail_url}
                                alt={`${result.first_name} ${result.last_name}`}
                            />
                            <h3>
                                {result.first_name} {result.last_name}
                            </h3>
                            <p dangerouslySetInnerHTML={{ __html: result.bio }}></p>
                        </div>
                    ))}
                    <h1>Tags</h1>
                    <div className={styles.tags}>
                        {event.tags
                            .slice()
                            .sort((a, b) => a.length - b.length)
                            .map((tag, index) => (
                                <span key={index} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
