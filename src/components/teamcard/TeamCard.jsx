"use client";
import React from 'react';
import styles from './TeamCard.module.css'; // Import using styles

const TeamCard = ({ name, role, imageUrl, colorClass }) => {
    // Determine the color class dynamically.  This handles cases where colorClass isn't provided.
    const finalColorClass = styles[colorClass] || styles.default; //default class if colorClass is missing or invalid

    return (
        <div className={`${styles.TeamCard} ${finalColorClass}`}> {/* Apply styles.teamCard and the  dynamic color class */}
            <div className={styles.container}>
                
                <div className={styles.profileImage}></div>
            </div>
                <div className={styles.info}>
                    <h2>{name}</h2>
                    <p>{role}</p>
                </div>
        </div>  
    );
};

export default TeamCard;