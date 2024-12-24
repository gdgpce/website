'use client';
import React from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ date, title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
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
