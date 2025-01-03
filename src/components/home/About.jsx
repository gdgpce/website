"use client";
import Link from "next/link";
import { LongDash, SideDash } from "@/components/dash/Dash";
import { DoubleRightOutlined } from "@ant-design/icons";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.secContainer + " " + styles.left}>
        <div className={styles.contentCon}>
          <div>
            <LongDash color="var(--g1)" />
            <div className={styles.secHeading}>
              About <span>GDG-PCE</span>
            </div>
            <SideDash color="var(--g1)" />
            <div className={styles.secDescription}>
              Google Developer Groups at PCE organize and facilitate workshops,
              hackathons, speaker sessions, and study jams to provide students
              with technical development skills. By joining, you can attend
              workshops, webinars, hackathons, and other exciting events. Expand
              your technical skills through a peer-to-peer learning environment.
            </div>
            {/* <Link href="/team" className={styles.secRedirect}>
                <span>MEET THE TEAM </span> <DoubleRightOutlined style={{ color: "var(--g1)" }} className={styles.arrow} />
            </Link> */}
          </div>
        </div>
        <div className={styles.imageCon + " " + styles.aboutIframe} >
          <iframe src="/about-iframe/index.html" frameBorder="0" width="100%" style={{overflow: "hidden"}}></iframe>
        </div>
      </div>
    </div>
  );
}
