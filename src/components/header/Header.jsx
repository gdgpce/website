import styles from "./page.module.css"

import Navbar from "@/components/navbar/Navbar";

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/animated-logo.svg" alt="logo" />
                <div>
                    <h3>Google Developer Groups</h3>
                    <p><span style={{color: "var(--g4)"}}>On Campus</span> • Pillai College of Engineering</p>
                </div>
            </div>
            <Navbar />
        </header>
    )
}