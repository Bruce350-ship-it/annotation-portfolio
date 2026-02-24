import Link from "next/link";
import BadgeTag from "./BadgeTag";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
    title: string;
    description: string;
    tools: string[];
    href: string;
}

export default function ProjectCard({ title, description, tools, href }: ProjectCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{description}</p>
                <div className={styles.tags}>
                    {tools.map((t) => (
                        <BadgeTag key={t} label={t} color="accent" />
                    ))}
                </div>
            </div>
            <Link href={href} className={styles.link}>
                View Project →
            </Link>
        </div>
    );
}
