import styles from "./page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Team", path: "/team" },
        { name: "Events", path: "/events" },
        { name: "Sponsors", path: "/sponsors" },
        { name: "Contact", path: "/contact" },
        { name: "FAQs", path: "/faqs" },
    ];

    return (
        <nav className={styles.nav}>
            {navItems.map((item) => (
                <Link href={item.path} key={item.name} className={pathname === item.path ? styles.active : "" }>{item.name}</Link>
            ))}
        </nav>
    );
}
