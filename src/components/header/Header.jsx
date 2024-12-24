"use client";
import styles from "./page.module.css"

import Navbar from "@/components/navbar/Navbar";

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/animated-logo-white.svg" alt="logo" />
            </div>
            <Navbar />
        </header>
    )
}