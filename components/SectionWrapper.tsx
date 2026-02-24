interface SectionWrapperProps {
    children: React.ReactNode;
    bg?: "white" | "neutral";
    id?: string;
}

export default function SectionWrapper({
    children,
    bg = "white",
    id,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`section${bg === "neutral" ? " section--neutral" : ""}`}
        >
            <div className="container">{children}</div>
        </section>
    );
}
