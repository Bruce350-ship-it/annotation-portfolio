import type { Metadata } from "next";
import styles from "./expertise.module.css";

export const metadata: Metadata = {
    title: "Annotation Expertise",
    description:
        "Full breakdown of Bruce's annotation expertise — NLP, Computer Vision, Geospatial, Audio & Speech, and Video annotation skills.",
};

type Domain = {
    id: string;
    icon: string;
    title: string;
    intro: string;
    skills: string[];
};

const domains: Domain[] = [
    {
        id: "nlp",
        icon: "🔤",
        title: "NLP Annotation",
        intro:
            "Text and language annotation across classification, entity recognition, intent, and semantic labeling tasks.",
        skills: [
            "Named Entity Recognition (NER) — PER, ORG, LOC, MISC entity labeling",
            "Sentiment Analysis — positive, negative, neutral, mixed spans",
            "Intent Detection — utterance-level intent classification",
            "Slot Filling — entity-role mapping within dialog turns",
            "Text Classification — multi-class and multi-label document categorization",
            "Thematic Labels — topic and theme assignment",
            "Topic Modeling support — validating LDA / BERTopic cluster coherence",
        ],
    },
    {
        id: "cv",
        icon: "🖼️",
        title: "Computer Vision",
        intro:
            "Image and spatial annotation for object detection, segmentation, and keypoint-based tasks.",
        skills: [
            "Bounding Boxes — axis-aligned and rotated rectangle annotations",
            "Polygon Segmentation — precise boundary tracing for irregular shapes",
            "Keypoint Marking — skeletal joint, facial landmark, pose estimation",
            "Object Counting — density estimation and instance enumeration",
            "Object Detection — multi-class bounding box datasets",
            "Semantic Segmentation — pixel-level class labeling",
            "Instance Segmentation — per-instance mask with unique object IDs",
        ],
    },
    {
        id: "geo",
        icon: "🌍",
        title: "Geospatial Annotation",
        intro:
            "GIS-grounded spatial labeling of satellite imagery and geographic data for remote sensing and mapping applications.",
        skills: [
            "GIS Fundamentals — coordinate systems, projections, spatial relationships",
            "Satellite Imagery Interpretation — multi-band, multi-resolution imagery",
            "Land Cover Mapping — vegetation, water, urban, agricultural classification",
            "Building Footprint Extraction — rooftop polygon delineation",
            "Boundary Marking — administrative and natural boundary delineation",
            "Cadastral Mapping — parcel and property boundary annotation",
            "Spatial Resolution Awareness — handling 0.3m–30m/pixel trade-offs",
            "Spectral Band Interpretation — RGB, NIR, SWIR band usage",
        ],
    },
    {
        id: "audio",
        icon: "🎙️",
        title: "Audio & Speech",
        intro:
            "Transcription, speaker labeling, and acoustic event annotation for speech AI and audio classification datasets.",
        skills: [
            "Verbatim Transcription — capturing all speech including disfluencies",
            "Clean Read Transcription — normalized, grammatically corrected text",
            "Timestamps — precise word- and phrase-level time alignment",
            "Accent Handling — regional and non-native speaker transcription",
            "Speaker Diarization — multi-speaker segmentation and labeling",
            "Sound Event Classification — music, noise, environmental sounds",
            "Acoustic Event Detection — onset/offset marking for non-speech audio",
        ],
    },
    {
        id: "video",
        icon: "🎬",
        title: "Video Annotation",
        intro:
            "Temporal and spatial annotation across video frames for object tracking and action recognition tasks.",
        skills: [
            "Object Tracking — consistent object labeling across video frames",
            "Frame Consistency — maintaining annotation quality across keyframes",
            "ID Continuity — preserving unique object identity across occlusions",
            "Interpolation — generating intermediate annotations between keyframes",
        ],
    },
];

export default function ExpertisePage() {
    return (
        <div className={styles.page}>
            <section className={styles.header}>
                <div className="container">
                    <span className="accent-line" />
                    <h1>Annotation Expertise</h1>
                    <p className={styles.subtitle}>
                        Five domains of high-precision data labeling — from raw text to
                        satellite imagery to streaming audio.
                    </p>
                </div>
            </section>

            {domains.map((domain, i) => (
                <section
                    key={domain.id}
                    id={domain.id}
                    className={`section${i % 2 === 1 ? " section--neutral" : ""}`}
                >
                    <div className="container">
                        <div className={styles.domainHeader}>
                            <span className={styles.domainIcon}>{domain.icon}</span>
                            <div>
                                <h2>{domain.title}</h2>
                                <p className={styles.domainIntro}>{domain.intro}</p>
                            </div>
                        </div>
                        <div className={styles.skillsGrid}>
                            {domain.skills.map((skill) => {
                                const [title, desc] = skill.split(" — ");
                                return (
                                    <div key={skill} className={styles.skillItem}>
                                        <div className={styles.skillDot} />
                                        <div>
                                            <strong>{title}</strong>
                                            {desc && <span> — {desc}</span>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
