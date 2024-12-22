"use client";
import styles from "./page.module.css";
import Header from "@/components/header/Header";

import Hero from "@/components/home/Hero";

export default function Home() {
  return (
      <div>
        <Header />
        <Hero />
      </div>
  );
}
