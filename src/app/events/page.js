"use client";
import styles from "./page.module.css";
import Header from "@/components/header/Header"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"


export default function Events() {
  return (
    <div>
      <Header />
      <Breadcrumb title="Events" />
    </div>
  );
}
