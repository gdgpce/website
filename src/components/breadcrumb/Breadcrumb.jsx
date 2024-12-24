"use client";
import styles from "./page.module.css"
import { CenteredDash, SideDash } from '@/components/dash/Dash';

export default function Breadcrumb(props) {

    return(
        <section className={styles.container}>
            <img className={styles.hexImg} src="/hex-bg.png" alt="hex-bg" />
            <div className={styles.con}>
                <h1>{props.title}</h1>
                <CenteredDash />
                <div className={styles.breadcrumb}>
                    <p>Home </p> <img src="/right-arrow-2.svg" className={styles.arrow} alt="rightArrow" /> <p> {props.title}</p>
                </div>
            </div>
        </section>
    )
}