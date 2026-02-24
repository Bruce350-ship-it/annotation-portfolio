"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import CTAButton from "@/components/CTAButton";
import styles from "./contact.module.css";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "sent">("idle");
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const mailtoLink = `mailto:bainbruce399@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
        window.location.href = mailtoLink;
        setStatus("sent");
    }

    return (
        <div className={styles.page}>
            <section className={styles.header}>
                <div className="container">
                    <span className="accent-line" />
                    <h1>Get in Touch</h1>
                    <p className={styles.subtitle}>
                        Let&apos;s improve your dataset quality. Whether you have a labeling
                        project, AI evaluation need, or just want to connect — reach out.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* ── Form ────────────────────────────────────────────── */}
                        <div className={styles.formWrap}>
                            <h2>Send a Message</h2>
                            {status === "sent" ? (
                                <div className={styles.successMsg}>
                                    <span>✅</span>
                                    <div>
                                        <strong>Opening your email client…</strong>
                                        <p>Your message draft has been prepared. Complete sending from your email app.</p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.fieldRow}>
                                        <div className={styles.field}>
                                            <label htmlFor="name">Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="Your full name"
                                                value={form.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="email">Email</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="you@company.com"
                                                value={form.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="subject">Subject</label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="Annotation project, collaboration, etc."
                                            value={form.subject}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            placeholder="Tell me about your project or opportunity…"
                                            value={form.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <CTAButton type="submit" variant="primary">
                                        Send Message →
                                    </CTAButton>
                                </form>
                            )}
                        </div>

                        {/* ── Aside ───────────────────────────────────────────── */}
                        <div className={styles.aside}>
                            <div className={styles.asideCard}>
                                <h3>Let&apos;s Work Together</h3>
                                <p>
                                    I&apos;m available for annotation projects, AI output
                                    evaluation tasks, and data quality consulting. I work
                                    remotely and am open to both short-term and ongoing
                                    engagements.
                                </p>
                            </div>

                            <div className={styles.asideCard}>
                                <h4>Find Me Online</h4>
                                <div className={styles.socialLinks}>
                                    <a
                                        href="https://www.linkedin.com/in/bruce-bainomugisha-bab81b197/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialItem}
                                    >
                                        <span className={styles.socialIcon}>in</span>
                                        <div>
                                            <strong>LinkedIn</strong>
                                            <span>Bruce Bainomugisha</span>
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/Bruce350-ship-it"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialItem}
                                    >
                                        <span className={styles.socialIcon}>⌥</span>
                                        <div>
                                            <strong>GitHub</strong>
                                            <span>Bruce350-ship-it</span>
                                        </div>
                                    </a>
                                    <a href="mailto:bainbruce399@gmail.com" className={styles.socialItem}>
                                        <span className={styles.socialIcon}>@</span>
                                        <div>
                                            <strong>Email</strong>
                                            <span>bainbruce399@gmail.com</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className={styles.ctaCard}>
                                <p>
                                    &quot;The quality of your training data is the ceiling of your
                                    model&apos;s performance. Let&apos;s raise that ceiling.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
