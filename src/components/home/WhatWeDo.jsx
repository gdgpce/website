import { LongDash, SideDash } from "@/components/dash/Dash";
import styles from "./page.module.css";
import { DoubleRightOutlined } from "@ant-design/icons";

import CountUp from "react-countup";

export default function WhatWeDo() {
    return (
        <div className={styles.work}>
            <div className={styles.con}>
                <div className={styles.left}>

                </div>
                <div className={styles.right}>
                    <LongDash />
                    <div className={styles.heading}>
                        What we <span>do</span>
                    </div>
                    <SideDash />
                    <div className={styles.para}>
                    We conducted workshops, seminars and other fun activities which help the students develop new skills and grow together as community to solve real world problems.  
                    </div>
                    <div className={styles.container}>
                        <div className={styles.a}>
                            <div className={styles.heading2}>1400+</div>
                            <div className={styles.para2}>Students connected</div>

                            <div className={styles.heading2}>5000+</div>
                            <div className={styles.para2}>Lines of code written</div>

                            <div className={styles.heading2}>10+</div>
                            <div className={styles.para2}>Workshops and events</div>
                        </div>
                        <div className={styles.b}>
                            <div className={styles.button}>
                                {/* <br /> */}
                                Events  <DoubleRightOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}