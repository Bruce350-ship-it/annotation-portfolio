import Link from "next/link";
import styles from "./CTAButton.module.css";

interface CTAButtonProps {
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "outline";
    children: React.ReactNode;
    external?: boolean;
    type?: "button" | "submit";
}

export default function CTAButton({
    href,
    onClick,
    variant = "primary",
    children,
    external,
    type = "button",
}: CTAButtonProps) {
    const cls = `${styles.btn} ${variant === "outline" ? styles.outline : styles.primary}`;

    if (href) {
        return external ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                {children}
            </a>
        ) : (
            <Link href={href} className={cls}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={cls}>
            {children}
        </button>
    );
}
