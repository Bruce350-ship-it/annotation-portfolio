import type { Metadata } from "next";
import styles from "./evaluation.module.css";

export const metadata: Metadata = {
    title: "AI Evaluation & Quality",
    description:
        "Bruce's expertise in AI output evaluation: hallucination detection, instruction-following assessment, rubric scoring, data quality control, and annotation workflow management.",
};

const sections = [
    {
        icon: "🧠",
        title: "AI Output Judgment",
        items: [
            { name: "Hallucination Detection", desc: "Identifying factual inaccuracies, fabricated citations, confabulated details, and unsupported claims in AI-generated text." },
            { name: "Instruction-Following Failures", desc: "Detecting when a model ignores, partially follows, or misinterprets task instructions — format violations, scope drift, constraint ignorance." },
            { name: "Tone & Safety Evaluation", desc: "Assessing response appropriateness — flagging harmful, biased, toxic, or off-policy content across diverse prompts." },
            { name: "Spam Signal Detection", desc: "Identifying low-effort, repetitive, or non-responsive outputs that fail to meaningfully address the user's query." },
            { name: "Humanization vs Robotic Tone", desc: "Evaluating naturalness of AI text — overly mechanical phrasing, unnatural structure, or inappropriate formality levels." },
        ],
    },
    {
        icon: "⚖️",
        title: "Evaluation & Comparison",
        items: [
            { name: "Response Ranking", desc: "Pairwise and multi-response ranking based on accuracy, relevance, completeness, and style — used in RLHF preference datasets." },
            { name: "Rubric Scoring", desc: "Applying structured evaluation rubrics with numeric or categorical scales across multiple quality dimensions." },
            { name: "Justification Comments", desc: "Writing clear, reasoned annotations explaining evaluation decisions — essential for training evaluator models." },
            { name: "Ideal Response Creation", desc: "Drafting model 'ideal' responses that demonstrate correct instruction-following, accurate content, and appropriate tone." },
        ],
    },
    {
        icon: "📊",
        title: "Data Expert Layer",
        items: [
            { name: "Labeling Rule Interpretation", desc: "Reading, understanding, and faithfully applying complex annotation guidelines — including edge case resolution notes." },
            { name: "Ambiguity Resolution", desc: "Systematic handling of unclear or borderline cases — documenting decisions for guideline updates." },
            { name: "Dataset Bias Awareness", desc: "Recognizing and flagging demographic, linguistic, cultural, and sampling biases that can affect model fairness." },
            { name: "Edge Case Documentation", desc: "Cataloguing unusual or difficult examples with explanations — building shared team knowledge and improving guidelines." },
        ],
    },
    {
        icon: "✅",
        title: "Quality Control Methods",
        items: [
            { name: "Gold Sets", desc: "Known-answer tasks embedded in annotation batches to measure annotator accuracy and flag drift." },
            { name: "Peer Review", desc: "Cross-annotator validation where one annotator reviews another's work against guidelines." },
            { name: "Consensus / Overlapping", desc: "Multiple annotators label the same items; inter-annotator agreement (Cohen's κ, Fleiss' κ) measured and resolved." },
            { name: "Validation Workflows", desc: "Structured multi-stage pipelines — annotation → review → QC check → export — with defined acceptance criteria." },
            { name: "Feedback Loops", desc: "Structured mechanisms for annotators to flag guideline ambiguities, enabling continuous improvement of labeling specs." },
        ],
    },
];

export default function EvaluationPage() {
    return (
        <div className={styles.page}>
            <section className={styles.header}>
                <div className="container">
                    <span className="accent-line" />
                    <h1>AI Evaluation & Quality</h1>
                    <p className={styles.subtitle}>
                        Systematic judgment of AI outputs — from hallucination detection to
                        rubric scoring — with a quality control framework built on
                        annotation best practices.
                    </p>
                </div>
            </section>

            <div className={styles.body}>
                {sections.map((section, i) => (
                    <section
                        key={section.title}
                        className={`section${i % 2 === 1 ? " section--neutral" : ""}`}
                    >
                        <div className="container">
                            <div className={styles.sectionHead}>
                                <span className={styles.sectionIcon}>{section.icon}</span>
                                <h2>{section.title}</h2>
                            </div>
                            <div className={styles.itemsGrid}>
                                {section.items.map((item) => (
                                    <div key={item.name} className={styles.evalCard}>
                                        <h3>{item.name}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
