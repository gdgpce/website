"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import MobileNav from "@/components/navbar/MobileNav";

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
    const closeMobileNav = () => setIsMobileNavOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/animated-logo-stroke.svg" alt="logo" />
                <div>
                    {/* <h3>GDG - <span>PCE</span></h3> */}
                    {/* <p><span style={{color: "var(--g4)", fontWeight: 600}}>On Campus</span> • Pillai College of Engineering</p> */}
                </div>
            </div>
            <Navbar />
            <button
                onClick={toggleMobileNav}
                className={styles.button}
            >
                <span className={styles.burger + " " + styles.burger2 + " " + (isMobileNavOpen ? styles.isClosed : '')} ></span>
            </button>
            <MobileNav isOpen={isMobileNavOpen} onClose={closeMobileNav} />
        </header>
    );
}
