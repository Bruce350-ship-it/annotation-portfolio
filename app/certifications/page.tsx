import type { Metadata } from "next";
import CertificationCard from "@/components/CertificationCard";
import styles from "./certifications.module.css";

export const metadata: Metadata = {
    title: "Certifications",
    description:
        "Bruce Bainomugisha's professional certifications: Google Advanced Data Analytics (Coursera) and Essentials of Data Labeling & Annotation (DataLens Africa).",
};

const certs = [
    {
        title: "Google Advanced Data Analytics Professional Certificate",
        issuer: "Coursera · Google",
        date: "2026",
        link: "https://www.credly.com/earner/earned/badge/666e6f0c-eb55-4da1-af5a-86f4a6db9ead",
        learned: [
            "End-to-end data analytics lifecycle from data collection to model evaluation",
            "Python for data analysis — pandas, NumPy, data wrangling, feature engineering",
            "Statistical thinking — distributions, hypothesis testing, A/B testing",
            "Machine learning fundamentals — regression, classification, model evaluation",
            "Data visualization and storytelling with Tableau and Python",
            "Understanding of data pipeline design and data quality standards",
        ],
        applies:
            "Directly informs my understanding of how annotation quality affects downstream model performance. The statistical thinking from this certification helps me evaluate interrater agreement, identify dataset biases, and reason about edge case distributions in annotation projects. The ML knowledge means I understand what annotators are actually feeding and why quality gates matter.",
    },
    {
        title: "Essentials of Data Labeling & Annotation",
        issuer: "DataLens Africa",
        date: "2026",
        link: undefined, // placeholder — add URL when available
        learned: [
            "Core annotation types — text, image, audio, video, and geospatial labeling",
            "Annotation quality control — gold sets, peer review, consensus methods",
            "Labeling tool workflows — industry-standard interfaces and export formats",
            "Inter-annotator agreement metrics — Cohen's kappa, Fleiss' kappa interpretation",
            "Annotation project management — task decomposition, pacing, feedback loops",
            "Professional annotator standards — instruction adherence, documentation, escalation",
        ],
        applies:
            "This certification formalized the methodology behind my annotation practice. It provided the vocabulary and framework to discuss annotation workflows professionally — from initial guideline development to QC validation. The quality control methods covered directly map to what I apply in my NER and Instance Segmentation projects, including gold set validation and structured peer review.",
    },
];

export default function CertificationsPage() {
    return (
        <div className={styles.page}>
            <section className={styles.header}>
                <div className="container">
                    <span className="accent-line" />
                    <h1>Certifications</h1>
                    <p className={styles.subtitle}>
                        Verified credentials that underpin my annotation methodology, data
                        analytics foundation, and quality control expertise.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.certList}>
                        {certs.map((cert) => (
                            <CertificationCard key={cert.title} {...cert} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Certs Matter ─────────────────────────────────────── */}
            <section className="section section--neutral">
                <div className="container">
                    <div className={styles.whySection}>
                        <h2>Continuous Learning</h2>
                        <p>
                            The field of AI data annotation is evolving rapidly alongside the
                            models it trains. I actively follow developments in annotation
                            methodology, AI evaluation frameworks (like those used in RLHF and
                            Constitutional AI), and domain-specific labeling standards for
                            geospatial, medical, and multimodal AI systems.
                        </p>
                        <p>
                            These certifications represent a commitment to structured,
                            evidence-based practice — not just doing annotation, but
                            understanding why guidelines are designed the way they are and
                            how labeling decisions propagate into model behavior.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
