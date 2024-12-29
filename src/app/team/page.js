"use client";
import Hexagon from "react-hexagon";
import styles from "./page.module.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import TeamCard from "@/components/teamcard/TeamCard";
import { DottedDash, LongDash } from "@/components/dash/Dash";
import Hamburger from "@/components/hamburger/Hamburger";
import coreMembers from "./2024-25/CoreData.json";
import MemberData from "./2024-25/MemberData.json";
import FacultyData from "./2024-25/FacultyData.json";

export default function Team() {
  return (
    <div>
      <Breadcrumb title="Team" />

      {/* <div className={styles.headings}>
        <div className={styles.subhead}>GDG-PCE</div>
        <div className={styles.mainhead}>CAMPUS LEAD</div>
        <DottedDash />
      </div> */}
{/* 
      <div className={styles.group}>
        <TeamCard
          name={coreMembers[0].Name}
          color={"#AD3BE1"}
          position={coreMembers[0].Position}
          imgURL={coreMembers[0].ImagePath}
        />
      </div> */}

    <div className={styles.headings}>
       {/* <div className={styles.subhead}>UNDER THE GUIDANCE OF</div>  */}
        {/* <LongDash /> */}
        <div className={styles.mainhead}>UNDER THE GUIDANCE OF</div>
        <DottedDash /
        >
      </div>
      <div className={styles.group + " " + styles.faculty} >
        {FacultyData.map((member, index) => ( 
          <TeamCard
            key={index}
            name={member.Name}
            color={"#9078F7"}
            position={member.Position}
            imgURL={member.ImagePath}
          />
        ))}
      </div>


      <div className={styles.headings}>
      {/* <div className={styles.subhead}>MANAGED BY</div> */}
        {/* <LongDash /> */}
        <div className={styles.mainhead}>ORGANIZERS</div>
        <DottedDash />
      </div>

      <div className={styles.group}>
        {coreMembers.map((member, index) => ( //.slice(1)
          <TeamCard
            key={index}
            name={member.Name}
            color={"#40ACFF"}
            position={member.Position}
            imgURL={member.ImagePath}
          />
        ))}
      </div>

      <div>

      {/* Loop through each category in MemberData */}
      {Object.keys(MemberData).map((category, categoryIndex) => (
        <div key={categoryIndex}>
          {/* Heading for each category */}
          <div className={styles.headings}>
            <div className={styles.mainhead}>{category.toUpperCase()}</div>
            <DottedDash />
          </div>

          {/* Render members for the category */}
          <div className={styles.group}>
            {MemberData[category].map((member, index) => (
              <TeamCard
                key={`${categoryIndex}-${index}`}  // Use a unique key for each member
                name={member.Name}
                color={"#35F290"}  // Customize color as needed
                position={member.Position}
                imgURL={member.ImagePath}
              />
            ))}
          </div>
        </div>
      ))}

    </div>


      
    </div>
  );
}
