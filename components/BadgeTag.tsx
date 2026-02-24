interface BadgeTagProps {
    label: string;
    color?: "accent" | "neutral" | "dark";
}

export default function BadgeTag({ label, color = "neutral" }: BadgeTagProps) {
    const colorMap: Record<string, React.CSSProperties> = {
        accent: { background: "rgba(181,122,92,0.12)", color: "var(--accent)", border: "1px solid rgba(181,122,92,0.3)" },
        neutral: { background: "var(--neutral-bg)", color: "var(--mid)", border: "1px solid var(--border)" },
        dark: { background: "var(--black)", color: "var(--white)", border: "1px solid var(--black)" },
    };
    return (
        <span
            style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "100px",
                fontSize: "0.78rem",
                fontWeight: 500,
                ...colorMap[color],
            }}
        >
            {label}
        </span>
    );
}
