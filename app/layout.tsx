import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bruce Bainomugisha | AI Data Annotator & AI Output Evaluator",
    template: "%s | Bruce Bainomugisha",
  },
  description:
    "Professional AI Data Annotator, AI Output Evaluator, and ML practitioner. Expert in NLP, Computer Vision, Geospatial, Audio, and Video annotation. Available for annotation projects and AI evaluation roles.",
  keywords: [
    "AI Data Annotator",
    "AI Evaluation",
    "Data Labeling",
    "NER Annotation",
    "Instance Segmentation",
    "Computer Vision Annotation",
    "Geospatial Annotation",
    "Speech Annotation",
    "AI Output Evaluator",
    "Quality Control",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
