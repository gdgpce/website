"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import {
    FacebookFilled,
    TwitterSquareFilled,
    LinkedinFilled,
    ShareAltOutlined,
    CalendarOutlined,
    UserOutlined,
} from "@ant-design/icons";

export default function User() {
    const params = useParams();
    const slug = params.slug;

    const [data, setData] = useState({});
    const [speaker, setSpeaker] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://gdg.community.dev/api/event_slim/${slug}`
                );
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const data = await response.json();
                console.log(data);
                setData(data);
                const res = await fetch(
                    `https://gdg.community.dev/api/event_person/?event=${slug}`
                );
                if (!res.ok) {
                    throw new Error("Something went wrong");
                }
                const speakerData = await res.json();
                setSpeaker(speakerData);
                console.log(speakerData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const [isSticky, setIsSticky] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (!leftRef.current || !rightRef.current) return;

            const leftHeight = leftRef.current.scrollHeight;
            const scrollY = window.scrollY;

            // When scrollY + viewport height exceeds left div's height, remove sticky position
            if (scrollY + window.innerHeight >= leftHeight) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={styles.page}>
            {/* <Header /> */}
            <div className={styles.container}>
                <img src={data.cropped_banner_url} alt="banner" />
                <h1>{data.title}</h1>
                <p role="paragraph">{data.description_short}</p>
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
                        <CalendarOutlined />{" "}
                        {new Date(data.start_date_iso).toLocaleString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })}
                    </h4>
                    <h4>
                        <UserOutlined /> {data.total_attendees} Attendees
                    </h4>
                </div>
                <button>RSVP Now</button>
            </div>
            <div className={styles.section}>
                <div className={styles.left} ref={leftRef}>
                    <h1>About this event</h1>
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></div>
                </div>
                <div className={styles.right} ref={rightRef}>
                    <h1>Speaker</h1>

                    {speaker.results.map((result) => (
                        <div key={result.id} className={styles.speaker}>
                            <img
                                src={result.picture.thumbnail_url}
                                alt={`${result.first_name} ${result.last_name}`}
                            />
                            <h3>
                                {result.first_name} {result.last_name}
                            </h3>

                            <p
                                dangerouslySetInnerHTML={{ __html: result.bio }}
                            ></p>
                        </div>
                    ))}


                    <h1>Tags</h1>

                    <div className={styles.tags}>
                        {data.tags
                            .slice() // Create a shallow copy to avoid mutating the original array
                            .sort((a, b) => a.length - b.length) // Sort by length
                            .map((tag, index) => (
                                <tag key={index}>{tag}</tag>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
