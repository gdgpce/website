"use client";
import styles from "./page.module.css"
import { CenteredDash, SideDash } from '@/components/dash/Dash';

import { usePathname } from "next/navigation"
export default function Breadcrumb(props) {
    const pathname = usePathname();
    const pagename = pathname.split("/").pop().charAt(0).toUpperCase() + pathname.split("/").pop().slice(1);
    
    return(
        <section className={styles.container}>
            <div className={styles.con}>
                <h1>{props.title}</h1>
                <CenteredDash />
                <p>Home &gt; {pagename}</p>
            </div>
        </section>
    )
}