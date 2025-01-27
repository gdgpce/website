"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import MobileNav from "@/components/navbar/MobileNav";

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prev) => {
            const newState = !prev;
            document.documentElement.style.overflow = newState ? "hidden" : ""; // Disable/enable <html> scroll
            return newState;
        });
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
        document.documentElement.style.overflow = ""; // Enable <html> scroll
    };

    // Cleanup in case the component unmounts
    useEffect(() => {
        return () => {
            document.documentElement.style.overflow = "";
        };
    }, []);
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="/"><img src="/animated-logo-stroke.svg" alt="logo" /></a>
                <div>
                    {/* <h3>GDG - <span>PCE</span></h3> */}
                    {/* <h3>Google Developer Groups</h3> */}
                    {/* <p><span style={{color: "var(--g4)", fontWeight: 600}}>On Campus</span> • Pillai College of Engineering</p> */}
                </div>
            </div>
            <Navbar />
            <button onClick={toggleMobileNav} className={styles.button}>
                <span
                    className={
                        styles.burger +
                        " " +
                        styles.burger2 +
                        " " +
                        (isMobileNavOpen ? styles.isClosed : "")
                    }
                ></span>
            </button>
            <MobileNav isOpen={isMobileNavOpen} onClose={closeMobileNav} />
        </header>
    );
}
