"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './styles/Hero.module.css';

const APARTMENTS = [
    {
        id: 'marmont',
        title: 'Apartment Marmont',
        image: '/images/split/livingRoom1.webp',
        imageAlt: 'Apartment Marmont – modern mountain home interior',
        description: 'Canada-based studio Bourgeois/Lechasseur Architects has designed an exciting new modern mountain home. Villa Vingt is located on a hillside in Northern Québec, at the edge of a ski resort.',
        bookUrl: 'https://www.youtube.com',
        reviews: {
            overall: '4.9',
            platforms: [
                { name: 'Airbnb',      stars: 5, score: '4.97', count: 128 },
                { name: 'Booking.com', stars: 5, score: '9.4',  count: 84  },
                { name: 'TripAdvisor', stars: 5, score: '5.0',  count: 61  },
            ],
        },
    },
    {
        id: 'solta',
        title: 'Apartment Solta',
        image: '/images/split/livingRoom2.webp',
        imageAlt: 'Apartment Solta – sunlit Dalmatian stone villa',
        description: 'Perched above the shimmering Adriatic, Apartment Solta blends centuries-old Dalmatian stone with considered contemporary interiors. Open terraces, lavender-scented gardens, and uninterrupted sea views await.',
        bookUrl: 'https://www.instagram.com',
        reviews: {
            overall: '4.8',
            platforms: [
                { name: 'Airbnb',      stars: 5, score: '4.93', count: 97  },
                { name: 'Booking.com', stars: 5, score: '9.6',  count: 63  },
                { name: 'TripAdvisor', stars: 5, score: '4.9',  count: 44  },
            ],
        },
    },
];

/* SVG icons keyed by platform name */
const PlatformIcon = ({ name }: { name: string }) => {
    if (name === 'Airbnb') return (
        <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c2.387 0 4.567.868 6.243 2.299A9.463 9.463 0 0 0 12 4.5a9.463 9.463 0 0 0-6.243 2.799C7.433 3.868 9.613 3 12 3zm0 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
    );
    if (name === 'Booking.com') return (
        <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
    );
    return (
        <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l2.582 7.953H22.5l-6.79 4.933 2.582 7.953L12 18.012l-6.292 4.827 2.582-7.953L2 9.953h7.918z" />
        </svg>
    );
};

const Hero = () => {
    const [activeIdx, setActiveIdx]         = useState<number>(0);
    const [displayedIdx, setDisplayedIdx]   = useState<number>(0); // lags behind — swaps at opacity-0 midpoint
    const [prevIdx, setPrevIdx]             = useState<number | null>(null);
    const [transitioning, setTransitioning] = useState<boolean>(false);
    const [showReviews, setShowReviews]     = useState<boolean>(false);
    const [hasLoaded, setHasLoaded]         = useState<boolean>(false);
    // in browsers setTimeout returns a number id
    const timerRef = useRef<number | null>(null);

    const INTERVAL = 6000;  // ms between auto-advances
    const DURATION = 700;   // ms cross-fade duration (match CSS)
    const MIDPOINT = DURATION * 0.4; // matches the 40% keyframe in contentFade

    // Fire the entrance animation class only once on mount
    useEffect(() => {
        setHasLoaded(true);
    }, []);

    const goTo = (idx: number) => {
        if (transitioning || idx === activeIdx) return;
        setTransitioning(true);
        setPrevIdx(activeIdx);
        setActiveIdx(idx);
        // Swap the visible text only when opacity is already 0 (midpoint of contentFade)
        setTimeout(() => {
            setDisplayedIdx(idx);
        }, MIDPOINT);
        setTimeout(() => {
            setPrevIdx(null);
            setTransitioning(false);
        }, DURATION);
    };

    const advance = () => goTo((activeIdx + 1) % APARTMENTS.length);

    /* Auto-advance */
    useEffect(() => {
        // use window.setTimeout so TypeScript understands the return type (number in browsers)
        timerRef.current = window.setTimeout(advance, INTERVAL);
        return () => {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }
        };
    }, [activeIdx, transitioning]);

    const current   = APARTMENTS[activeIdx];    // drives background image + dots
    const displayed = APARTMENTS[displayedIdx]; // drives all text content — swaps at opacity-0
    const prev      = prevIdx !== null ? APARTMENTS[prevIdx] : null;

    return (
        <section className={styles.hero}>

            {/* ── BACKGROUND IMAGES (cross-fade) ── */}
            <div className={styles.backgroundLayer}>
                {/* outgoing image fades out */}
                {prev && (
                    <div key={`prev-${prev.id}`} className={`${styles.bgSlide} ${styles.bgSlideOut}`}>
                        <Image src={prev.image} alt={prev.imageAlt} fill priority className={styles.backgroundImage} sizes="100vw" />
                    </div>
                )}
                {/* incoming image fades in */}
                <div key={`curr-${current.id}`} className={`${styles.bgSlide} ${styles.bgSlideIn}`}>
                    <Image src={current.image} alt={current.imageAlt} fill priority className={styles.backgroundImage} sizes="100vw" />
                </div>
            </div>

            <div className={styles.darkOverlay} />
            <div className={styles.gridLines} aria-hidden="true" />
            <div className={styles.whiteReveal} aria-hidden="true" />

            <div className={styles.grid}>

                {/* ── TOP BAR ── */}
                <div className={styles.brandCol}>
                    <p className={styles.brandName}>
                        Marmont /<br />
                        Apartment<br />
                        Marmont
                    </p>
                </div>

                <div className={styles.navCol}>
                    <nav className={styles.nav} aria-label="Main navigation">
                        <a href="#projects" className={styles.navLink}>Apartments</a>
                        <a href="#about"    className={styles.navLink}>About</a>
                        <a href="#contact"  className={styles.navLink}>Contact</a>
                    </nav>
                </div>

                {/* ── TITLE ──
                    No `key` prop here — we never remount this element.
                    titleEntering fires the reveal once on first load.
                    titleFading cross-fades the text in-place on slide changes. */}
                <div className={styles.titleCol}>
                    <h1
                        className={`${styles.title} ${!hasLoaded ? styles.titleEntering : ''} ${transitioning ? styles.titleFading : ''}`}
                    >
                        {displayed.title}
                    </h1>
                </div>

                {/* ── REVIEWS ── */}
                <div className={styles.reviewsCol}>
                    <div
                        className={styles.reviewsWrapper}
                        onMouseEnter={() => setShowReviews(true)}
                        onMouseLeave={() => setShowReviews(false)}
                    >
                        <button
                            className={styles.reviewsButton}
                            aria-label="View our ratings"
                            onClick={() => setShowReviews(v => !v)}
                        >
                            <span className={styles.reviewsButtonLabel}>Our Reviews</span>
                            <span
                                className={`${styles.reviewsButtonScore} ${transitioning ? styles.contentFading : ''}`}
                            >
                                {displayed.reviews.overall} ★
                            </span>
                        </button>

                        <div className={`${styles.reviewsPanel} ${showReviews ? styles.reviewsPanelVisible : ''}`}>
                            {displayed.reviews.platforms.map(p => (
                                <div key={p.name} className={styles.reviewItem}>
                                    <PlatformIcon name={p.name} />
                                    <div className={styles.reviewDetails}>
                                        <span className={styles.platformName}>{p.name}</span>
                                        <span className={styles.stars}>{'★'.repeat(p.stars)}</span>
                                        <span className={styles.score}>{p.score} · {p.count} reviews</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── BOTTOM INFO ── */}
                <div className={styles.infoCol}>
                    <div className={styles.projectInfo}>
                        <p
                            className={`${styles.projectDescription} ${transitioning ? styles.contentFading : ''}`}
                        >
                            {displayed.description}
                        </p>
                        <a href={displayed.bookUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>book now</a>
                    </div>
                </div>

                {/* ── PAGINATION DOTS ── */}
                <div className={styles.dotsCol} aria-label="Apartment switcher">
                    {APARTMENTS.map((apt, i) => (
                        <button
                            key={apt.id}
                            className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Show ${apt.title}`}
                            aria-current={i === activeIdx}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Hero;