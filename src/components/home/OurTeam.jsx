"use client";
import Link from "next/link";
import { LongDash, SideDash } from "@/components/dash/Dash";
import { DoubleRightOutlined } from "@ant-design/icons";
import styles from "./page.module.css";

export default function OurTeam() {
  return (
    <div className={styles.about}>
      <div className={styles.secContainer + " " + styles.left}>
        <div className={styles.contentCon}>
          <div>
            <LongDash color="var(--g3)" />
            <div className={styles.secHeading}>
               <span>Our</span> Team
            </div>
            <SideDash color="var(--g3)" />
            <div className={styles.secDescription}>
              Google Developer Groups at PCE organize and facilitate workshops,
              hackathons, speaker sessions, and study jams to provide students
              with technical development skills. By joining, you can attend
              workshops, webinars, hackathons, and other exciting events. Expand
              your technical skills through a peer-to-peer learning environment.
            </div>
            <Link href="/team" className={styles.secRedirect}>
                <span>MEET THE TEAM </span> <DoubleRightOutlined style={{ color: "var(--g3)" }} className={styles.arrow} />
            </Link>
          </div>
        </div>
        <div className={styles.imageCon}>
          <img src="/assets/team.png" alt="team" />
        </div>
      </div>
    </div>
  );
}
