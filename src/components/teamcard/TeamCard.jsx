"use client";
import React from "react";
import styles from "./TeamCard.module.css"; // Import using styles
import Hexcard from "@/components/hexcard/Hexcard";

const TeamCard = ({ name, position, imgURL, color }) => {

  return (
    <div className={styles.card}>
      <Hexcard color={color} src={imgURL} />
      <div className={styles.info}>
        <div className={styles.heading}>{name}</div>
        <div className={styles.position}>{position}</div>
      </div>
    </div>
  );
};

export default TeamCard;
