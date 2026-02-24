import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <p className={styles.name}>Bruce Bainomugisha</p>
                    <p className={styles.tagline}>
                        AI Data Annotator · AI Output Evaluator · ML Background
                    </p>
                </div>

                <div className={styles.socials}>
                    <a
                        href="mailto:bainbruce399@gmail.com"
                        className={styles.socialLink}
                        aria-label="Email"
                    >
                        Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bruce-bainomugisha-bab81b197/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Bruce350-ship-it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                </div>

                <p className={styles.copy}>
                    © {new Date().getFullYear()} Bruce Bainomugisha. Built with Next.js.
                </p>
            </div>
        </footer>
    );
}
