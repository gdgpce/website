import styles from "./page.module.css";
import { SideDash, LongDash } from "@/components/dash/Dash";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.con}>
                <div className={styles.left}>
                    <LongDash />
                    <div className={styles.heading}>
                        About <span>GDG-PCE</span>
                    </div>
                    <SideDash />
                    
                    <div className={styles.para}>
                    Google Developer Groups at PCE organize and facilitate workshops, hackathons, speaker sessions, and study jams to provide students with technical development skills. By joining, you can attend workshops, webinars, hackathons, and other exciting events. Expand your technical skills through a peer-to-peer learning environment.
                    </div>
                    <div className={styles.meet}>
                    {/* MEET THE TEAM  <DoubleRightOutlined /> */}
                        <span>MEET THE TEAM </span> <img src="/right-arrow.svg" width={16} alt="rightArrow"/>
                    </div>
                </div>
                <div className={styles.right}>
                    
                </div>
            </div>
        </div>
    );
}