import type { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Bruce Bainomugisha — AI Data Annotator and AI Output Evaluator with a strong ML background, data analytics certification, and quality-first work philosophy.",
};

const philosophy = [
    {
        icon: "🎯",
        title: "Accuracy Over Speed",
        desc: "Every label matters. I prioritize getting it right over getting it done fast, because low-quality annotations degrade model performance downstream.",
    },
    {
        icon: "🔍",
        title: "Edge Case Awareness",
        desc: "The cases that seem rare are often the most important. I actively seek out ambiguous, borderline, and unusual examples and document them systematically.",
    },
    {
        icon: "✅",
        title: "Quality-First Mindset",
        desc: "I treat annotation as a craft. Gold sets, peer review, consensus checks, and validation workflows are part of every project — not optional extras.",
    },
    {
        icon: "📋",
        title: "Instruction-Following Discipline",
        desc: "Annotation guidelines are authoritative. I read them completely, follow them precisely, and flag inconsistencies rather than guessing.",
    },
];

export default function AboutPage() {
    return (
        <div className={styles.page}>
            {/* ── Header ───────────────────────────────────────────────── */}
            <section className={styles.header}>
                <div className="container">
                    <span className="accent-line" />
                    <h1>About Me</h1>
                    <p className={styles.subtitle}>
                        A high-precision AI Data Annotator and AI Output Evaluator with a
                        foundation in Machine Learning and Data Analytics.
                    </p>
                    <a
                        href="/Bruce Resume.pdf"
                        download
                        className={styles.resumeBtn}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </section>

            {/* ── Background ───────────────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className={styles.bio}>
                        <div>
                            <h2>Professional Background</h2>
                            <div className={styles.bioText}>
                                <p>
                                    I am <strong>Bruce Bainomugisha</strong>, an AI Data Annotator
                                    and AI Output Evaluator specializing in building high-quality
                                    training datasets for machine learning systems. My work spans
                                    five annotation domains: NLP, Computer Vision, Geospatial,
                                    Audio & Speech, and Video.
                                </p>
                                <p>
                                    My journey into data annotation grew naturally from a foundation
                                    in machine learning. Understanding how models are trained —
                                    their sensitivity to label quality, class imbalance, and
                                    annotation inconsistency — gives me a practitioner&apos;s
                                    perspective that produces better datasets.
                                </p>
                                <p>
                                    I hold a <strong>Google Advanced Data Analytics Professional
                                        Certificate</strong> from Coursera, which deepened my
                                    understanding of data pipelines, statistical thinking, and
                                    the role of clean, well-structured data in reliable ML systems.
                                    I also completed <strong>Essentials of Data Labeling &amp;
                                        Annotation</strong> through DataLens Africa, formalizing my
                                    annotation methodology and quality control practices.
                                </p>
                                <p>
                                    Practically, I have built end-to-end annotation pipelines: a
                                    Named Entity Recognition corpus pipeline using spaCy and Label
                                    Studio, and an Instance Segmentation pre-annotation system
                                    using YOLOv8 and CVAT. Both projects demonstrate not just
                                    labeling ability, but workflow design and quality control
                                    thinking.
                                </p>
                            </div>
                        </div>
                        <div className={styles.aside}>
                            <div className={styles.asideCard}>
                                <h4>Core Skills</h4>
                                <ul>
                                    {["NLP Annotation", "Computer Vision Annotation", "Geospatial Annotation", "Audio & Speech Annotation", "AI Output Evaluation", "Quality Control", "Data Pipeline Design"].map((s) => (
                                        <li key={s}>
                                            <span className={styles.bullet} />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.asideCard}>
                                <h4>Tools</h4>
                                <ul>
                                    {["Label Studio", "CVAT", "QGIS", "Python / spaCy", "YOLOv8 / Ultralytics", "Jupyter Notebook"].map((s) => (
                                        <li key={s}>
                                            <span className={styles.bullet} />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Philosophy ───────────────────────────────────────────── */}
            <section className="section section--neutral">
                <div className="container">
                    <div style={{ marginBottom: "48px" }}>
                        <span className="accent-line" />
                        <h2>Work Philosophy</h2>
                        <p style={{ marginTop: "8px", color: "var(--mid)" }}>
                            The principles that guide every annotation task I take on.
                        </p>
                    </div>
                    <div className={styles.philGrid}>
                        {philosophy.map((p) => (
                            <div key={p.title} className={styles.philCard}>
                                <span className={styles.philIcon}>{p.icon}</span>
                                <div>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
