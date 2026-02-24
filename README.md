# Bruce Bainomugisha — AI Data Annotator Portfolio

A professional portfolio website showcasing AI data annotation expertise, projects, certifications, and tools. Built with Next.js 15 (App Router) and deployed on Vercel.

**Live site:** _[add your Vercel URL after deployment]_

---

## Overview

This site presents Bruce Bainomugisha's work as an AI Data Annotator and AI Output Evaluator, covering five annotation domains: NLP, Computer Vision, Geospatial, Audio & Speech, and AI Output Evaluation.

### Pages

| Route | Description |
|---|---|
| `/` | Hero, skills snapshot, featured projects, certifications, tools |
| `/about` | Professional background, work philosophy, resume download |
| `/projects` | NER Corpus Pipeline & Instance Segmentation Pipeline (with screenshots & GitHub links) |
| `/expertise` | Full breakdown of annotation skills across all five domains |
| `/evaluation` | AI output evaluation methodology and approach |
| `/certifications` | Google Advanced Data Analytics & DataLens Africa credentials |
| `/tools` | Annotation tools and technologies proficiency |
| `/contact` | Contact form and availability |

---

## Projects Featured

### 1. NER Corpus Annotation Pipeline
End-to-end NLP annotation pipeline — spaCy pre-annotation + Label Studio human review.
- **47,959** token rows across PER, ORG, LOC, MISC entity types
- Exported in JSON and CoNLL-2003 format
- 👉 [GitHub Repository](https://github.com/Bruce350-ship-it/ner-project)

### 2. Instance Segmentation Pre-Annotation Pipeline
Zero-shot YOLOv8 inference pipeline for CVAT task acceleration.
- 80 MS-COCO classes, COCO JSON output for seamless CVAT import
- Reduces annotation time by pre-populating bounding boxes
- 👉 [GitHub Repository](https://github.com/Bruce350-ship-it/instance-segmentation-project)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS custom properties (no Tailwind)
- **Typography:** Inter — Google Fonts
- **Images:** `next/image` with local assets in `public/screenshots/`
- **Deployment:** Vercel

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
portfolio-site/
├── app/
│   ├── page.tsx              # Homepage
│   ├── about/                # About Me
│   ├── projects/             # Projects
│   ├── expertise/            # Expertise
│   ├── evaluation/           # AI Evaluation
│   ├── certifications/       # Certifications
│   ├── tools/                # Tools
│   ├── contact/              # Contact
│   ├── globals.css           # Design tokens & global styles
│   └── layout.tsx            # Root layout (Navbar + Footer)
├── components/               # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SkillCard.tsx
│   ├── CTAButton.tsx
│   ├── BadgeTag.tsx
│   └── CertificationCard.tsx
└── public/
    ├── Bruce Resume.pdf
    └── screenshots/          # Project & profile images
```

---

## Certifications

- **Google Advanced Data Analytics Professional Certificate** — Coursera · Google (2026) · [View Credential](https://www.credly.com/earner/earned/badge/666e6f0c-eb55-4da1-af5a-86f4a6db9ead)
- **Essentials of Data Labeling & Annotation for AI Development** — DataLens Africa (2026)

---

## Deployment

This site is deployed on [Vercel](https://vercel.com). To deploy your own fork:

1. Push to GitHub
2. Import the repository into Vercel
3. Vercel auto-detects Next.js — no configuration needed
4. A production URL is assigned on first deploy
