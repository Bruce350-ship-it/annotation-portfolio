import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SkillCard from "@/components/SkillCard";
import CTAButton from "@/components/CTAButton";
import BadgeTag from "@/components/BadgeTag";
import styles from "./Home.module.css";

export const metadata: Metadata = {
  title: "Bruce Bainomugisha | AI Data Annotator & AI Output Evaluator",
  description:
    "Professional AI Data Annotator and AI Output Evaluator with ML background. Specializing in NLP, Computer Vision, Geospatial, and Audio annotation.",
};

const skills = [
  {
    icon: "🔤",
    title: "NLP Annotation",
    skills: ["Named Entity Recognition", "Sentiment Analysis", "Intent Detection", "Slot Filling", "Text Classification"],
  },
  {
    icon: "🖼️",
    title: "Computer Vision",
    skills: ["Bounding Boxes", "Polygon Segmentation", "Keypoint Marking", "Object Detection", "Instance Segmentation"],
  },
  {
    icon: "🌍",
    title: "Geospatial Annotation",
    skills: ["Satellite Imagery", "Land Cover Mapping", "Building Footprints", "Cadastral Mapping", "Spectral Band Interpretation"],
  },
  {
    icon: "🎙️",
    title: "Audio & Speech",
    skills: ["Verbatim Transcription", "Timestamps", "Speaker Diarization", "Acoustic Event Detection", "Accent Handling"],
  },
  {
    icon: "🤖",
    title: "AI Output Evaluation",
    skills: ["Hallucination Detection", "Instruction-Follow Failures", "Rubric Scoring", "Response Ranking", "Safety Evaluation"],
  },
];

const tools = ["CVAT", "Label Studio", "QGIS", "spaCy", "Python", "YOLOv8", "Jupyter"];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroPhotoWrap}>
              <Image
                src="/screenshots/Bruce.jpg"
                alt="Bruce Bainomugisha — AI Data Annotator & AI Output Evaluator"
                width={96}
                height={96}
                className={styles.heroPhoto}
                priority
              />
            </div>
            <span className={styles.eyebrow}>Available for Projects</span>
            <h1 className={styles.heroTitle}>
              AI Data Annotator &<br />
              <span className={styles.heroAccent}>AI Output Evaluator</span>
            </h1>
            <p className={styles.heroSub}>
              Bruce Bainomugisha — High-precision data annotation specialist
              with ML background. Expert in NLP, Computer Vision, Geospatial,
              Audio, and Video annotation. Quality-first. Edge-case aware.
              Instruction-following disciplined.
            </p>
            <div className={styles.heroCTAs}>
              <CTAButton href="/projects" variant="primary">
                View Projects
              </CTAButton>
              <CTAButton href="/contact" variant="outline">
                Get in Touch
              </CTAButton>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardHeader}>
                <div className={styles.statusDot} />
                <span>Open to Work</span>
              </div>
              <p className={styles.heroCardRole}>AI Data Annotator</p>
              <p className={styles.heroCardRole}>AI Output Evaluator</p>
              <p className={styles.heroCardRole}>Data Quality Specialist</p>
              <div className={styles.heroStats}>
                <div>
                  <strong>2+</strong>
                  <span>Projects</span>
                </div>
                <div>
                  <strong>5</strong>
                  <span>Domains</span>
                </div>
                <div>
                  <strong>2</strong>
                  <span>Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills Snapshot ──────────────────────────────────────── */}
      <section className="section section--neutral">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="accent-line" />
            <h2>Annotation Expertise</h2>
            <p>Covering five domains of high-precision data labeling</p>
          </div>
          <div className={styles.skillsGrid} style={{ marginTop: "48px" }}>
            {skills.map((s) => (
              <SkillCard key={s.title} {...s} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <CTAButton href="/expertise" variant="outline">
              Explore Full Expertise
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── Projects Highlight ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="accent-line" />
            <h2>Featured Projects</h2>
            <p>Real annotation pipelines built end-to-end</p>
          </div>
          <div className="grid-2" style={{ marginTop: "48px" }}>
            <div className={styles.projectHighlight}>
              <span className={styles.projNum}>01</span>
              <h3>NER Corpus Annotation Pipeline</h3>
              <p>
                End-to-end NLP annotation pipeline using spaCy pre-annotation +
                Label Studio human review. 47,959 token rows. Exported in JSON
                and CoNLL-2003 format.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                {["spaCy", "Label Studio", "Python", "CoNLL"].map((t) => (
                  <BadgeTag key={t} label={t} color="accent" />
                ))}
              </div>
              <Link href="/projects#ner" className={styles.projLink}>
                View Details →
              </Link>
            </div>
            <div className={styles.projectHighlight}>
              <span className={styles.projNum}>02</span>
              <h3>Instance Segmentation Pre-Annotation</h3>
              <p>
                Zero-shot YOLOv8 detection pipeline for CVAT task acceleration.
                COCO JSON output for seamless CVAT import. 80 MS-COCO classes.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                {["YOLOv8", "CVAT", "COCO JSON", "Python"].map((t) => (
                  <BadgeTag key={t} label={t} color="accent" />
                ))}
              </div>
              <Link href="/projects#segmentation" className={styles.projLink}>
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications Highlight ─────────────────────────────── */}
      <section className="section section--neutral">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="accent-line" />
            <h2>Certifications</h2>
            <p>Verified credentials supporting annotation and data expertise</p>
          </div>
          <div className="grid-2" style={{ marginTop: "48px" }}>
            <div className={styles.certBadge}>
              <span className={styles.certIcon}>🎓</span>
              <div>
                <strong>Google Advanced Data Analytics</strong>
                <p>Professional Certificate · Coursera</p>
              </div>
            </div>
            <div className={styles.certBadge}>
              <span className={styles.certIcon}>📜</span>
              <div>
                <strong>Essentials of Data Labeling & Annotation</strong>
                <p>DataLens Africa</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <CTAButton href="/certifications" variant="outline">
              View Certifications
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── Tools Overview ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="accent-line" />
            <h2>Tools & Technologies</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "32px", justifyContent: "center" }}>
            {tools.map((t) => (
              <BadgeTag key={t} label={t} color="neutral" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 style={{ color: "var(--white)" }}>Ready to Improve Your Dataset Quality?</h2>
              <p style={{ color: "#bbb", marginTop: "8px" }}>
                Let&apos;s work together to build high-quality, well-annotated training data.
              </p>
            </div>
            <CTAButton href="/contact" variant="primary">
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
