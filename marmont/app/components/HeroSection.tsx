import Image from 'next/image';
import styles from './styles/Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Background Image Layer */}
            <div className={styles.backgroundLayer}>
                <Image
                    src="/villa-vingt.jpg"
                    alt="Villa Vingt - Modern Mountain Home in Northern Québec"
                    fill
                    priority
                    quality={95}
                    className={styles.backgroundImage}
                    sizes="100vw"
                />
            </div>

            {/* Dark Overlay */}
            <div className={styles.darkOverlay} />

            {/* Grid Lines Overlay */}
            <div className={styles.gridLines} aria-hidden="true" />

            {/* White Reveal Overlay (animates away) */}
            <div className={styles.whiteReveal} aria-hidden="true" />

            {/* Main Grid Content */}
            <div className={styles.grid}>

                {/* Col 1 — Brand / Studio Name */}
                <div className={styles.brandCol}>
                    <p className={styles.brandName}>
                        Bourgeois /<br />
                        Lechasseur<br />
                        Architectes
                    </p>
                </div>

                {/* Col 2-4 — Hero Title (centered) */}
                <div className={styles.titleCol}>
                    <h1 className={styles.title}>Villa Vingt</h1>
                </div>

                {/* Col 3-5 — Navigation */}
                <div className={styles.navCol}>
                    <nav className={styles.nav} aria-label="Main navigation">
                        <a href="#projects" className={styles.navLink}>Projects</a>
                        <a href="#about" className={styles.navLink}>About</a>
                        <a href="#contact" className={styles.navLink}>Contact</a>
                    </nav>
                </div>

                {/* Right Edge — Social Icons */}
                <div className={styles.socialsCol}>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink} aria-label="Twitter">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Facebook">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Instagram">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Bottom Left — Project Info & CTA */}
                <div className={styles.infoCol}>
                    <div className={styles.projectInfo}>
                        <p className={styles.projectDescription}>
                            Canada-based studio Bourgeois/Lechasseur Architects has designed an
                            exciting new modern mountain home. Villa Vingt is located on a
                            hillside in Northern Québec, at the edge of a ski resort.
                        </p>

                        <div className={styles.credits}>
                            <div className={styles.creditBlock}>
                                <span className={styles.creditLabel}>Words by</span>
                                <span className={styles.creditName}>Jillian Japka</span>
                            </div>
                            <div className={styles.creditBlock}>
                                <span className={styles.creditLabel}>Photography by</span>
                                <span className={styles.creditName}>Adrien Williams</span>
                            </div>
                        </div>

                        <a href="#learn-more" className={styles.ctaButton}>
                            learn more
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;