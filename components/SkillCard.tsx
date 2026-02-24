import styles from "./SkillCard.module.css";

interface SkillCardProps {
    icon: string;
    title: string;
    skills: string[];
}

export default function SkillCard({ icon, title, skills }: SkillCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.list}>
                {skills.map((s) => (
                    <li key={s} className={styles.item}>
                        <span className={styles.dot} />
                        {s}
                    </li>
                ))}
            </ul>
        </div>
    );
}
