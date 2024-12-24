import styles from "./mobile.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav({ isOpen, onClose }) {
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
        <div className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
            <nav className={styles.navList}>
                {navItems.map((item) => (
                    <Link
                        href={item.path}
                        key={item.name}
                        className={pathname === item.path ? styles.active : ""}
                        onClick={onClose}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
