"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styles from "./page.module.css";
export const dynamic = 'force-dynamic'; // Explicitly make the route dynamic

export default function User() {
    const router = useRouter();
    const { slug } = router.query;

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await fetch(`https://gdg.community.dev/api/event_slim/${slug}`);
          if(!response.ok) {
            throw new Error("Something went wrong");
          }
          const data = await response.json();
          console.log(data);
          setData(data);
        }
        catch (error) {
          setError(error.message);
        }
        finally {
          setLoading(false);
        }
      }

      fetchData();
    }, []);

    if(loading) {
      return <p>Loading...</p>
    }
    if(error) {
      return <p>{error}</p>
    }

  return (
  <div>
  <div className={styles.cardContainer}>
        <div className={styles.card}>
        <img src={data.avatar_url} alt={`${data.name}'s avatar`} width="150" height="150" />

        <h2>{data.name}</h2>

        <p className={styles.bio}>{data.bio || 'No bio available'}</p>
        <div className={styles.info}>
          <p><strong>Following:</strong> {data.following}</p>
          <p><strong>Followers:</strong> {data.followers}</p>
          <p><strong>Repos:</strong> {data.public_repos}</p>
        </div>

        </div>
      </div>
    {/* <Navbar /> */}
  </div>
  );
}
