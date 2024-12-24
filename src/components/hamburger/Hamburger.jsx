import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Hamburger.module.css";
import { MenuOutlined } from "@ant-design/icons";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      {!isOpen && (
        <div className={styles.iconWrapper} onClick={toggleMenu}>
          {/* <MenuOutlined className={styles.burgerIcon} /> */}
        </div>
      )}
      <div
        ref={menuRef}
        className={`${styles.menu} ${
          isOpen ? styles.showMenu : styles.hideMenu
        }`}
      >
        <button className={styles.closeButton} onClick={toggleMenu}>
          ×
        </button>
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={`${styles.menuItem} ${
              pathname === item.path ? styles.active : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hamburger;
