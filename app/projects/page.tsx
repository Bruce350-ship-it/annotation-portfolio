import type { Metadata } from "next";
import Image from "next/image";
import BadgeTag from "@/components/BadgeTag";
import styles from "./projects.module.css";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore Bruce's annotation projects: a full NER corpus annotation pipeline using spaCy & Label Studio, and an Instance Segmentation pre-annotation pipeline using YOLOv8 & CVAT.",
};

export default function ProjectsPage() {
    return (
        <div className={styles.page}>
            {/* ── Header ───────────────────────────────────────────────── */}
            <section className={styles.header}>
                <div className="container">
                    <span className="accent-line" />
                    <h1>Projects</h1>
                    <p className={styles.subtitle}>
                        End-to-end annotation pipelines with real datasets, quality control,
                        and production-ready outputs.
                    </p>
                </div>
            </section>

            {/* ── NER Project ──────────────────────────────────────────── */}
            <section className="section" id="ner">
                <div className="container">
                    <div className={styles.projHeader}>
                        <span className={styles.projNum}>01</span>
                        <div>
                            <h2>NER Corpus Annotation Pipeline</h2>
                            <p className={styles.projSub}>
                                End-to-end NLP annotation pipeline · Label Studio · spaCy
                            </p>
                        </div>
                        <a
                            href="https://github.com/Bruce350-ship-it/ner-project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.sourceBtn}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            View Source
                        </a>
                    </div>

                    <div className={styles.projBody}>
                        <div className={styles.projContent}>
                            <div className={styles.infoBlock}>
                                <h3>Project Overview</h3>
                                <p>
                                    A complete Named Entity Recognition data annotation pipeline
                                    that takes a raw NER corpus, preprocesses it into
                                    sentence-level records, applies spaCy automatic
                                    pre-annotation, imports into Label Studio for human review,
                                    and exports a production-ready annotated corpus in both JSON
                                    and CoNLL-2003 formats.
                                </p>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Dataset</h3>
                                <p>
                                    A widely-used NER benchmark corpus containing news wire text,
                                    originally annotated with BIO tags across{" "}
                                    <strong>47,959 token rows</strong> spanning thousands of
                                    sentences. Source columns: Sentence #, Token, POS tag, and
                                    BIO NER tag.
                                </p>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Labeling Schema & Entity Types</h3>
                                <div className={styles.entityTable}>
                                    {[
                                        { label: "PER", desc: "Person names (e.g., Fouad Siniora)" },
                                        { label: "ORG", desc: "Organizations (e.g., United Nations)" },
                                        { label: "LOC", desc: "Locations and Places (e.g., Beirut, London)" },
                                        { label: "MISC", desc: "Miscellaneous named entities" },
                                    ].map(({ label, desc }) => (
                                        <div key={label} className={styles.entityRow}>
                                            <BadgeTag label={label} color="accent" />
                                            <span>{desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Annotation Challenges & Edge Cases</h3>
                                <ul className={styles.bulletList}>
                                    <li>Nested or overlapping entity mentions (e.g., "New York Times" — ORG vs LOC)</li>
                                    <li>Ambiguous pronoun references near named entities</li>
                                    <li>Abbreviations and acronyms (e.g., "UN" vs "United Nations")</li>
                                    <li>Transliterated foreign names with inconsistent spelling</li>
                                    <li>Context-dependent entity type assignment (e.g., "Lebanon" as LOC vs ORG)</li>
                                </ul>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Quality Control Method</h3>
                                <ul className={styles.bulletList}>
                                    <li>spaCy pre-annotation provided a baseline to correct, not start from scratch</li>
                                    <li>Human review of every sentence with spaCy predictions shown as suggestions</li>
                                    <li>Label Studio annotation review panel for inter-annotator consistency</li>
                                    <li>CoNLL export validated against BIO tag sequence rules</li>
                                </ul>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Tools Used</h3>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                                    {["Python", "pandas", "spaCy (en_core_web_sm)", "Label Studio", "Jupyter Notebook", "CoNLL-2003 format"].map((t) => (
                                        <BadgeTag key={t} label={t} color="neutral" />
                                    ))}
                                </div>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Lessons Learned</h3>
                                <ul className={styles.bulletList}>
                                    <li>ML-assisted pre-annotation dramatically reduces labeling time while maintaining quality</li>
                                    <li>Clear labeling guidelines are essential before starting — ambiguity compounds across thousands of records</li>
                                    <li>CoNLL format constraints (valid BIO sequences) catch annotation errors that JSON export misses</li>
                                    <li>Character-offset spans require careful handling for multi-token entities</li>
                                </ul>
                            </div>
                        </div>

                        {/* Screenshots */}
                        <div className={styles.screenshots}>
                            <h3 style={{ marginBottom: "16px" }}>Annotation Screenshots</h3>
                            <div className={styles.screenshotCard}>
                                <p className={styles.screenshotLabel}>Before Manual Annotation</p>
                                <div className={styles.imgWrap}>
                                    <Image
                                        src="/screenshots/ner-before.png"
                                        alt="Label Studio before manual annotation — entities not yet highlighted"
                                        width={540}
                                        height={360}
                                        style={{ width: "100%", height: "auto", borderRadius: "var(--radius-sm)" }}
                                    />
                                </div>
                                <p style={{ fontSize: "0.82rem", color: "var(--light)", marginTop: "8px" }}>
                                    Entities are not yet highlighted — the annotator is about to begin labeling.
                                </p>
                            </div>
                            <div className={styles.screenshotCard}>
                                <p className={styles.screenshotLabel}>After Manual Annotation</p>
                                <div className={styles.imgWrap}>
                                    <Image
                                        src="/screenshots/ner-after.png"
                                        alt="Label Studio after manual annotation — entities highlighted and confirmed"
                                        width={540}
                                        height={360}
                                        style={{ width: "100%", height: "auto", borderRadius: "var(--radius-sm)" }}
                                    />
                                </div>
                                <p style={{ fontSize: "0.82rem", color: "var(--light)", marginTop: "8px" }}>
                                    Entities highlighted and confirmed: LOC Beirut, LOC New York, ORG United Nations, PER Fouad Siniora.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Instance Segmentation Project ────────────────────────── */}
            <section className="section section--neutral" id="segmentation">
                <div className="container">
                    <div className={styles.projHeader}>
                        <span className={styles.projNum}>02</span>
                        <div>
                            <h2>Instance Segmentation Pre-Annotation Pipeline</h2>
                            <p className={styles.projSub}>
                                Zero-shot YOLOv8 inference · CVAT · COCO JSON
                            </p>
                        </div>
                        <a
                            href="https://github.com/Bruce350-ship-it/instance-segmentation-project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.sourceBtn}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            View Source
                        </a>
                    </div>

                    <div className={styles.projBody}>
                        <div className={styles.projContent}>
                            <div className={styles.infoBlock}>
                                <h3>Dataset Description</h3>
                                <p>
                                    COCO128 — a 128-image subset of the MS-COCO dataset covering 80
                                    object categories (person, bicycle, car, … toothbrush). Used as
                                    a demonstration dataset for the pre-annotation pipeline. The
                                    same pipeline works on any custom image folder.
                                </p>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Pipeline Approach</h3>
                                <ul className={styles.bulletList}>
                                    <li>YOLOv8 medium model (<code>yolov8m.pt</code>) performs zero-shot inference — no custom training required</li>
                                    <li>Per-image YOLO predictions saved as <code>.txt</code> label files</li>
                                    <li>Labels assembled into COCO JSON with coordinate conversion</li>
                                    <li>Output uploaded to CVAT via &quot;Upload Annotations → COCO 1.0&quot;</li>
                                    <li>Annotators correct detections rather than drawing from scratch</li>
                                </ul>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Bounding Box vs Polygon Comparison</h3>
                                <ul className={styles.bulletList}>
                                    <li><strong>Bounding boxes</strong> generated by this pipeline — fast, sufficient for detection tasks</li>
                                    <li><strong>Polygon segmentation</strong> requires instance-level masks (e.g., <code>yolov8m-seg.pt</code>)</li>
                                    <li>Pipeline is designed to be extended to full instance masks with a polygon-extraction step</li>
                                    <li>CVAT&apos;s polygon tools then allow precise boundary correction</li>
                                </ul>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Object ID Consistency</h3>
                                <ul className={styles.bulletList}>
                                    <li>Each detection is assigned a unique 1-indexed annotation ID</li>
                                    <li>Category IDs match CVAT label configuration (<code>labels.json</code>, 80 classes)</li>
                                    <li>Image IDs are consistent with filename ordering for traceability</li>
                                </ul>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Quality Checks &amp; Error Prevention</h3>
                                <ul className={styles.bulletList}>
                                    <li>Coordinate normalization validated: YOLO (cx, cy, w, h) → COCO (x_min, y_min, w, h)</li>
                                    <li>Image dimensions extracted from actual file metadata, not assumed</li>
                                    <li>Robust label discovery fallback to recursive glob on YOLO run directory</li>
                                    <li>Skip-inference mode for fast JSON rebuild without re-running model</li>
                                    <li>Confidence thresholding to filter low-quality detections before CVAT import</li>
                                </ul>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Accuracy Considerations &amp; Common Errors Avoided</h3>
                                <ul className={styles.bulletList}>
                                    <li>Avoided treating YOLO normalized coords as pixel coords — explicit width/height multiplication applied</li>
                                    <li>Avoided single-class assumption — all 80 COCO class IDs mapped correctly</li>
                                    <li>Avoided path nesting bugs — flexible glob handles YOLO version-specific folder structures</li>
                                    <li>CVAT label config (<code>labels.json</code>) kept in sync with COCO class ordering to prevent category mismatch</li>
                                </ul>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Tools Used</h3>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                                    {["Python 3.10+", "YOLOv8 / Ultralytics", "CVAT", "COCO JSON", "Pillow", "PyTorch"].map((t) => (
                                        <BadgeTag key={t} label={t} color="neutral" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Screenshots */}
                        <div className={styles.screenshots}>
                            <h3 style={{ marginBottom: "16px" }}>Annotation Screenshots</h3>
                            <div className={styles.screenshotCard}>
                                <p className={styles.screenshotLabel}>Before Pre-Annotation</p>
                                <div className={styles.imgWrap}>
                                    <Image
                                        src="/screenshots/seg-before.png"
                                        alt="CVAT before pre-annotation — no bounding boxes yet"
                                        width={540}
                                        height={360}
                                        style={{ width: "100%", height: "auto", borderRadius: "var(--radius-sm)" }}
                                    />
                                </div>
                                <p style={{ fontSize: "0.82rem", color: "var(--light)", marginTop: "8px" }}>
                                    Raw images imported into CVAT — no annotations present yet before pipeline runs.
                                </p>
                            </div>
                            <div className={styles.screenshotCard}>
                                <p className={styles.screenshotLabel}>After Pre-Annotation (YOLOv8 Output)</p>
                                <div className={styles.imgWrap}>
                                    <Image
                                        src="/screenshots/seg-after.png"
                                        alt="CVAT after YOLOv8 pre-annotation — bounding boxes auto-populated"
                                        width={540}
                                        height={360}
                                        style={{ width: "100%", height: "auto", borderRadius: "var(--radius-sm)" }}
                                    />
                                </div>
                                <p style={{ fontSize: "0.82rem", color: "var(--light)", marginTop: "8px" }}>
                                    YOLOv8 detections imported via COCO JSON — annotators now correct boxes rather than drawing from scratch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
