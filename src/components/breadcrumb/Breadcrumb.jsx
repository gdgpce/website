"use client";
import styles from "./page.module.css"
import { usePathname } from "next/navigation"
export default function Breadcrumb(props) {
    const pathname = usePathname();
    const pagename = pathname.split("/").pop().charAt(0).toUpperCase() + pathname.split("/").pop().slice(1);
    
    return(
        <section className={styles.container}>
            <h1>{props.title}</h1>
            <p>Home &gt; {pagename}</p>
        </section>
    )
}