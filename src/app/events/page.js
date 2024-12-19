import styles from "./page.module.css";

import Header from "@/components/header/Header"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"


export default function Home() {
  return (
    <div>
      <Header />
      <Breadcrumb title="Events" />
    </div>
  );
}
