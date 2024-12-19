import styles from "./page.module.css"
import Link from "next/link"

export default function Navbar() {
    return(
        <nav className={styles.nav}>
            <Link href="/" className={styles.active}>Home</Link>
            <Link href="/team">Team</Link>
            <Link href="/events">Events</Link>
            <Link href="/sponsors">Sponsors</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/faqs">FAQs</Link>
        </nav>
    )
}