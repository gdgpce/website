"use client";
import styles from "./page.module.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import TeamCard from "@/components/teamcard/TeamCard"
import { DottedDash } from "@/components/dash/Dash"
import Hamburger from "@/components/hamburger/Hamburger"


export default function Team() {
  return (
    <div className={styles.page}>
      <Breadcrumb title="Team" />
      <div>
        <Hamburger/>
      </div>
      <div className={styles.headings}>
        <h2 className={styles.subhead}>FACULTY CO-ORDINATORS</h2>
        <h1 className={styles.mainhead}><strong>UNDER THE GUIDANCE OF</strong></h1>
        <DottedDash />
      </div>

      <div className={styles.team}>
        <TeamCard name = "Dr. Sharvari Govilkar Govilkar" role = "HOD of Computer Engineering Department"/>
        <TeamCard name = "Dr. Satishkumar L. Varma" role = "HOD of IT Engineering Department"/>
        <TeamCard name = "Dr. Sharvari Govilkar" role = "HOD of Computer Engineering Department"/>
        <TeamCard name = "Dr. Satishkumar L. Varma" role = "HOD of IT Engineering Department"/>
      </div>

      <div className={styles.headings}>
        <h2 className={styles.subhead}>GDG-PCE</h2>
        <h1 className={styles.mainhead}><strong>CAMPUS LEAD</strong></h1>
        <DottedDash />
      </div>

      <div className={styles.team}>
        <TeamCard name = "Aakash Satpute" role = "HOD of Computer Engineering Department"/>
      </div>

      <div className={styles.headings}>
        <h2 className={styles.subhead}>INTRODUCING</h2>
        <h1 className={styles.mainhead}><strong>CORE TEAM</strong></h1>
        <DottedDash />
      </div>

      <div className={styles.team}>
        <TeamCard name = "Munir Siddhique" role = "Technical Lead"/>
        <TeamCard name = "Atharva Kolekar" role = " Web Dev Lead"/>
        <TeamCard name = "Ankit Kumar" role = "Publicity Lead"/>
        <TeamCard name = "Rohit Pradeep" role = "Management Lead"/>
      </div>

    </div>
  );
}
