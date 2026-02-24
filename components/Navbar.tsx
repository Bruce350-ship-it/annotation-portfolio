"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/expertise", label: "Expertise" },
    { href: "/evaluation", label: "AI Evaluation" },
    { href: "/certifications", label: "Certifications" },
    { href: "/tools", label: "Tools" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoName}>Bruce Bainomugisha</span>
                    <span className={styles.logoDot} aria-hidden="true" />
                </Link>

                <ul className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`${styles.link} ${pathname === href ? styles.active : ""}`}
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className={styles.hamburger}
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    <span className={`${styles.bar} ${open ? styles.barOpen1 : ""}`} />
                    <span className={`${styles.bar} ${open ? styles.barOpen2 : ""}`} />
                    <span className={`${styles.bar} ${open ? styles.barOpen3 : ""}`} />
                </button>
            </nav>
        </header>
    );
}
