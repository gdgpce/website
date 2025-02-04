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
              We have created projects which reflect the passion, creativity and the skills of our team. 
              These projects are a statement of our determnation.
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
