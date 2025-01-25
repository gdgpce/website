"use client";
import styles from "./page.module.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { DottedDash } from "@/components/dash/Dash";
import TeamCard from "@/components/teamcard/TeamCard";

export default function Sponsors() {
    return (
        <div>
            <Breadcrumb title="Sponsors" />
            <div className={styles.headings}>
                <div className={styles.mainhead}>Community Partners</div>
                <DottedDash />
            </div>
            <div className={styles.group}>
                <TeamCard
                    name={""}
                    color={"#2effea"}
                    position={""}
                    imgURL={"/assets/sponsor1.png"}
                />
            </div>
        </div>
    );
}
