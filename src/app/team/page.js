"use client";
import styles from "./page.module.css";
import Header from "@/components/header/Header"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"

export default function Team() {
  return (
    <div className={styles.page}>
      <Header />
      <Breadcrumb title="Our Team" />
    </div>
  );
}
