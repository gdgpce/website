"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import FAQs from "@/components/tailwind/faqs/FAQs";
import styles from "./page.module.css";
import { DottedDash } from "@/components/dash/Dash";

export default function Page() {
    return (
        <div>
            <Breadcrumb title="FAQs" />
            <div className={styles.headings}>
                <div className={styles.mainhead}>
                    Frequently Asked Questions
                </div>
                <DottedDash />
            </div>
            <FAQs />
        </div>
    );
}
