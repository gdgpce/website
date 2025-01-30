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
              <p>
                A teamwork is the first step in accomplishing any mission and for our mission we have built a team of zealous students.
              </p>
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
