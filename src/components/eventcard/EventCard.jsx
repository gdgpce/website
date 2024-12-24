'use client';
import { useRouter } from 'next/navigation';
import styles from './EventCard.module.css';



const EventCard = ({ slug, date, title, description, imageUrl }) => {  
  // const eventSlug = slug;
  const router = useRouter();
  const handleRedirect = (eventSlug) => {
    if (eventSlug) {
      router.push(`/events/${eventSlug}`);
    }
    else {
      router.push(`/events`);
    }
  }
  return (
    <div className={styles.card} onClick={() => handleRedirect(slug)}>
        <div className={styles.header}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.date}>{date}</h3>
          <h3 className={styles.title}>{title}</h3>
          <p>{description}</p>
        </div>
    </div>
  );
};

export default EventCard;
