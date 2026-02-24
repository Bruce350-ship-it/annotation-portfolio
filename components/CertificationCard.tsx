import styles from "./CertificationCard.module.css";

interface CertificationCardProps {
    title: string;
    issuer: string;
    date: string;
    learned: string[];
    applies: string;
    link?: string;
}

export default function CertificationCard({
    title,
    issuer,
    date,
    learned,
    applies,
    link,
}: CertificationCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.issuerBadge}>{issuer}</span>
                <span className={styles.date}>{date}</span>
            </div>
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.titleLink}
                >
                    <h3 className={styles.title}>{title} ↗</h3>
                </a>
            ) : (
                <h3 className={styles.title}>{title}</h3>
            )}
            <div className={styles.section}>
                <p className={styles.label}>What I Learned</p>
                <ul className={styles.list}>
                    {learned.map((item) => (
                        <li key={item} className={styles.listItem}>
                            <span className={styles.dot} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.section}>
                <p className={styles.label}>How It Applies</p>
                <p className={styles.applies}>{applies}</p>
            </div>
        </div>
    );
}
