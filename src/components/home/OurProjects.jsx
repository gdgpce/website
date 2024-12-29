"use client";
import Link from "next/link";
import { LongDash, SideDash } from "@/components/dash/Dash";
import { DoubleRightOutlined } from "@ant-design/icons";
import styles from "./page.module.css";

export default function OurProjects() {
  return (
    <div className={styles.about}>
      <div className={styles.secContainer + " " + styles.right}>
        <div className={styles.contentCon}>
          <div>
            <LongDash color="var(--g4)" />
            <div className={styles.secHeading}>
               <span>Our</span> Projects
            </div>
            <SideDash color="var(--g4)" />
            <div className={styles.secDescription}>
              Google Developer Groups at PCE organize and facilitate workshops,
              hackathons, speaker sessions, and study jams to provide students
              with technical development skills. By joining, you can attend
              workshops, webinars, hackathons, and other exciting events. Expand
              your technical skills through a peer-to-peer learning environment.
            </div>
            <Link href="https://github.com/gdgpce" target="_blank" className={styles.secRedirect}>
                <span>VISIT GITHUB </span> <DoubleRightOutlined style={{ color: "var(--g4)" }} className={styles.arrow} />
            </Link>
          </div>
        </div>
        <div className={styles.imageCon}>
          <img src="/assets/projects.png" alt="projects" />
        </div>
      </div>
    </div>
  );
}
