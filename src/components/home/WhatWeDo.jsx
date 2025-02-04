"use client";
import Link from "next/link";
import { LongDash, SideDash } from "@/components/dash/Dash";
import { DoubleRightOutlined } from "@ant-design/icons";
import CountUp from 'react-countup';
import styles from "./page.module.css";

export default function WhatWeDo() {
  return (
    <div className={styles.work}>
      <div className={styles.secContainer + " " + styles.right}>
        <div className={styles.contentCon}>
          <div>
            <LongDash color="var(--g2)" />
            <div className={styles.secHeading}>
              What we <span>do</span>
            </div>
            <SideDash color="var(--g2)" />
            <div className={styles.secDescription}>
              We are a developer committee who conducts hands-on workshops, exciting coding challenges,
              abstruse hackathons, expert talks and many more fun events so that you can learn and grow with us
              and get adept with latest technology.
            </div>
            <div className={styles.statContainer}>
              <div className={styles.a}> 

                <div className={styles.statTitle}>
                  <CountUp end={100} duration={5} enableScrollSpy scrollSpyDelay={100}/>+
                </div>
                <div className={styles.text}>Students connected</div>

                <div className={styles.statTitle}><CountUp end={15000} duration={5} enableScrollSpy scrollSpyDelay={100}/>
                +</div>
                <div className={styles.text}>Lines of code written</div>

                <div className={styles.statTitle}><CountUp end={10} duration={5} enableScrollSpy scrollSpyDelay={100}/>+</div>
                <div className={styles.text}>Workshops and events</div>

              </div>
              <div className={styles.b}>
                <div className={styles.button}>
                  <Link href="/events" className={styles.secRedirect}>
                    <span>Events </span>{" "}
                    <DoubleRightOutlined
                      style={{ color: "var(--g2)" }}
                      className={styles.arrow}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageCon}>
          <img src="/assets/whatwedo.png" alt="whatwedo" />
        </div>
      </div>
    </div>
  );
}
