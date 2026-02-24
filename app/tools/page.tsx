import type { Metadata } from "next";
import BadgeTag from "@/components/BadgeTag";
import styles from "./tools.module.css";

export const metadata: Metadata = {
    title: "Tools",
    description:
        "Annotation tools and technologies Bruce is proficient in: CVAT, Label Studio, QGIS, spaCy, YOLOv8, Python, and professional annotation workflow knowledge.",
};

const tools = [
    {
        icon: "🔧",
        name: "CVAT",
        fullName: "Computer Vision Annotation Tool",
        type: "Computer Vision",
        capabilities: [
            "Bounding box and polygon annotation for images and video",
            "COCO JSON import/export for pre-annotation workflows",
            "Task management with annotator assignment and review modes",
            "YOLO, VOC, and COCO format support",
            "Semi-automatic annotation with model-assisted labeling",
            "Object tracking across video frames",
        ],
        used: "Used for Instance Segmentation pre-annotation pipeline — importing YOLOv8 COCO predictions and managing annotation review.",
    },
    {
        icon: "🏷️",
        name: "Label Studio",
        fullName: "Open Source Data Labeling Platform",
        type: "Multi-domain",
        capabilities: [
            "NLP annotation — NER, sentiment, classification, relation extraction",
            "Image annotation — bounding boxes, polygons, keypoints",
            "Audio and video annotation with timeline interface",
            "Pre-annotation import from ML model predictions",
            "Gold set task injection for quality control",
            "Export to JSON, CSV, CoNLL, and custom formats",
        ],
        used: "Used for NER corpus annotation pipeline — importing spaCy pre-annotations, hosting human review, and exporting annotated corpus in JSON and CoNLL-2003 formats.",
    },
    {
        icon: "🌍",
        name: "QGIS",
        fullName: "Quantum Geographic Information System",
        type: "Geospatial",
        capabilities: [
            "Satellite imagery loading and visualization",
            "Vector polygon digitization for land cover and buildings",
            "Multi-layer spatial data management",
            "Coordinate system and projection handling",
            "Attribute table editing for feature classification",
            "Plugin support for remote sensing analysis",
        ],
        used: "Applied for geospatial annotation tasks — land cover mapping, building footprint extraction, and boundary delineation from satellite imagery.",
    },
    {
        icon: "🐍",
        name: "Python / spaCy / Ultralytics",
        fullName: "Scripting & ML Ecosystem",
        type: "ML & Scripting",
        capabilities: [
            "Data preprocessing — pandas, CSV/JSON manipulation",
            "NLP pre-annotation — spaCy en_core_web_sm model",
            "Computer Vision inference — YOLOv8 via Ultralytics",
            "Annotation format conversion (BIO ↔ CoNLL, YOLO ↔ COCO)",
            "Label Studio and CVAT API integration",
            "Pipeline scripting and automation",
        ],
        used: "Core scripting language for both portfolio projects — preprocessing, pre-annotation, format conversion, and CVAT/Label Studio import scripts.",
    },
];

export default function ToolsPage() {
    return (
        <div className={styles.page}>
            <section className={styles.header}>
                <div className="container">
                    <span className="accent-line" />
                    <h1>Tools & Technologies</h1>
                    <p className={styles.subtitle}>
                        Professional annotation tools, ML frameworks, and workflow systems
                        I use to build and manage high-quality labeling pipelines.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.toolsGrid}>
                        {tools.map((tool) => (
                            <div key={tool.name} className={styles.toolCard}>
                                <div className={styles.toolHeader}>
                                    <span className={styles.toolIcon}>{tool.icon}</span>
                                    <div>
                                        <div className={styles.toolNameRow}>
                                            <h3>{tool.name}</h3>
                                            <BadgeTag label={tool.type} color="accent" />
                                        </div>
                                        <p className={styles.toolFull}>{tool.fullName}</p>
                                    </div>
                                </div>

                                <div className={styles.toolSection}>
                                    <p className={styles.toolLabel}>Capabilities</p>
                                    <ul className={styles.capList}>
                                        {tool.capabilities.map((c) => (
                                            <li key={c}>{c}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.toolUsed}>
                                    <p className={styles.toolLabel}>How I&apos;ve Used It</p>
                                    <p className={styles.usedText}>{tool.used}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Workflow Knowledge ───────────────────────────────────── */}
            <section className="section section--neutral">
                <div className="container">
                    <div className={styles.workflowSection}>
                        <span className="accent-line" />
                        <h2 style={{ marginTop: "12px" }}>Annotation Workflow Knowledge</h2>
                        <p>
                            Beyond individual tools, I understand how production annotation
                            workflows are designed and managed — from task decomposition and
                            annotator onboarding, to QC gates, feedback loops, and final
                            dataset export.
                        </p>
                        <div className={styles.workflowSteps}>
                            {[
                                { step: "01", label: "Guideline Development", desc: "Writing and refining annotation instructions with examples and edge case documentation." },
                                { step: "02", label: "Task Setup", desc: "Configuring labeling projects in CVAT or Label Studio with correct labels, templates, and pre-annotations." },
                                { step: "03", label: "Pre-Annotation", desc: "Using ML models (spaCy, YOLOv8) to generate baseline suggestions, reducing annotator effort." },
                                { step: "04", label: "Human Review", desc: "Annotators correct, validate, and submit labels with full guideline compliance." },
                                { step: "05", label: "Quality Control", desc: "Gold sets, peer review, and consensus checks to maintain dataset quality standards." },
                                { step: "06", label: "Export & Validation", desc: "Exporting in target format (JSON, CoNLL, COCO, XML) with format validation before delivery." },
                            ].map(({ step, label, desc }) => (
                                <div key={step} className={styles.workflowStep}>
                                    <span className={styles.stepNum}>{step}</span>
                                    <div>
                                        <strong>{label}</strong>
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
