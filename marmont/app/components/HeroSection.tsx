"use client"

import { useState } from 'react';
import Image from 'next/image';
import styles from './styles/Hero.module.css';

const Hero = () => {
    const [showReviews, setShowReviews] = useState(false);

    return (
        <section className={styles.hero}>
            <div className={styles.backgroundLayer}>
                <Image
                    src="/images/split/livingRoom1.webp"
                    alt="Villa Vingt - Modern Mountain Home in Northern Québec"
                    fill
                    priority
                    className={styles.backgroundImage}
                    sizes="100vw"
                />
            </div>

            <div className={styles.darkOverlay} />
            <div className={styles.gridLines} aria-hidden="true" />
            <div className={styles.whiteReveal} aria-hidden="true" />

            <div className={styles.grid}>

                <div className={styles.brandCol}>
                    <p className={styles.brandName}>
                        Marmont /<br />
                        Apartment<br />
                        Marmont
                    </p>
                </div>

                <div className={styles.titleCol}>
                    <h1 className={styles.title}>Apartment Marmont</h1>
                </div>

                <div className={styles.navCol}>
                    <nav className={styles.nav} aria-label="Main navigation">
                        <a href="#projects" className={styles.navLink}>Apartments</a>
                        <a href="#about" className={styles.navLink}>About</a>
                        <a href="#contact" className={styles.navLink}>Contact</a>
                    </nav>
                </div>

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

                <div className={styles.reviewsCol}>
                    <button
                        className={styles.reviewsButton}
                        aria-label="View our ratings"
                        onMouseEnter={() => setShowReviews(true)}
                        onMouseLeave={() => setShowReviews(false)}
                        onClick={() => setShowReviews(v => !v)}
                    >
                        <span className={styles.reviewsButtonLabel}>Our Reviews</span>
                        <span className={styles.reviewsButtonScore}>4.9 ★</span>
                    </button>

                    <div
                        className={`${styles.reviewsPanel} ${showReviews ? styles.reviewsPanelVisible : ''}`}
                        onMouseEnter={() => setShowReviews(true)}
                        onMouseLeave={() => setShowReviews(false)}
                    >
                        <div className={styles.reviewItem}>
                            <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c2.387 0 4.567.868 6.243 2.299A9.463 9.463 0 0 0 12 4.5a9.463 9.463 0 0 0-6.243 2.799C7.433 3.868 9.613 3 12 3zm0 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                            </svg>
                            <div className={styles.reviewDetails}>
                                <span className={styles.platformName}>Airbnb</span>
                                <span className={styles.stars}>★★★★★</span>
                                <span className={styles.score}>4.97 · 128 reviews</span>
                            </div>
                        </div>

                        <div className={styles.reviewItem}>
                            <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                            <div className={styles.reviewDetails}>
                                <span className={styles.platformName}>Booking.com</span>
                                <span className={styles.stars}>★★★★★</span>
                                <span className={styles.score}>9.4 · 84 reviews</span>
                            </div>
                        </div>

                        <div className={styles.reviewItem}>
                            <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 2l2.582 7.953H22.5l-6.79 4.933 2.582 7.953L12 18.012l-6.292 4.827 2.582-7.953L2 9.953h7.918z" />
                            </svg>
                            <div className={styles.reviewDetails}>
                                <span className={styles.platformName}>TripAdvisor</span>
                                <span className={styles.stars}>★★★★★</span>
                                <span className={styles.score}>5.0 · 61 reviews</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.infoCol}>
                    <div className={styles.projectInfo}>
                        <p className={styles.projectDescription}>
                            Canada-based studio Bourgeois/Lechasseur Architects has designed an
                            exciting new modern mountain home. Villa Vingt is located on a
                            hillside in Northern Québec, at the edge of a ski resort.
                        </p>


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