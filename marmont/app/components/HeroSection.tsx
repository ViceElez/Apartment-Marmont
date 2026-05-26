"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles/Hero.module.css";

/* ─── DATA ─── */
const APARTMENTS = [
    {
        id: "marmont",
        title: "Apartment\nMarmont",
        image: "/images/split/general/heroImage.webp",
        imageAlt: "Apartment Marmont – modern mountain home interior",
        description:
            "Nestled in the heart of Split, where contemporary design meets historic charm in a vibrant urban setting.",
        bookUrl: "https://hr.airbnb.com/rooms/10186174?source_impression_id=p3_1779463369_P3oAHkNFOHK_HY9O",
        reviews: {
            overall: "4.9",
            platforms: [
                { name: "Airbnb", stars: 5, score: "4.9", count: 142 },
                { name: "Booking.com", stars: 5, score: "9.4",  count: 43  },
            ],
        },
    },
    {
        id: "solta",
        title: "Apartment\nŠolta",
        image: "/images/solta/general/heroImage.webp",
        imageAlt: "Apartment Šolta – sunlit Dalmatian stone villa",
        description:
            "Perched above the shimmering Adriatic with uninterrupted sea views and timeless stone architecture.",
        bookUrl: "https://www.airbnb.com/rooms/11817985?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=1746179446&source_impression_id=p3_1779463646_P32iXIwD-WkG0io1&previous_page_section_name=1000&federated_search_id=4f3f34a8-1c6a-4ea1-89e0-0fa79fb03fc8",
        reviews: {
            overall: "4.8",
            platforms: [
                { name: "Airbnb",      stars: 5, score: "4.91", count: 97 },
            ],
        },
    },
];

const INTERVAL  = 6_000;
const DURATION  = 700;
const MIDPOINT  = DURATION * 0.4;

/* ─── PLATFORM ICONS ─── */
function PlatformIcon({ name }: { name: string }) {
    if (name === "Airbnb") {
        return (
            <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.006 1.6c-1.27 0-2.312.752-2.943 1.97C7.47 6.15 5.5 11.07 3.96 14.8c-.54 1.3-.81 2.45-.81 3.4 0 2.87 2.03 4.8 4.64 4.8 1.57 0 3.05-.78 4.22-2.2.16-.19.32-.4.48-.62.16.22.32.43.48.62 1.17 1.42 2.65 2.2 4.22 2.2 2.61 0 4.64-1.93 4.64-4.8 0-.95-.27-2.1-.81-3.4-1.54-3.73-3.51-8.65-5.1-11.23C13.32 2.35 12.28 1.6 12.006 1.6zm0 1.6c.73 0 1.38.46 1.87 1.27 1.53 2.47 3.48 7.34 5.01 11.03.48 1.16.72 2.17.72 2.9 0 1.97-1.41 3.2-3.04 3.2-1.2 0-2.32-.63-3.23-1.76-.37-.45-.7-.97-.97-1.55a.8.8 0 00-1.46 0c-.27.58-.6 1.1-.97 1.55-.91 1.13-2.03 1.76-3.23 1.76-1.63 0-3.04-1.23-3.04-3.2 0-.73.24-1.74.72-2.9 1.53-3.69 3.48-8.56 5-11.03.5-.81 1.15-1.27 1.88-1.27z"/>
            </svg>
        );
    }

    if (name === "Booking.com") {
        return (
            <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2.4 2h10.2c2.76 0 4.86 2.04 4.86 4.74 0 1.62-.78 3.06-2.04 3.96 1.86.84 3.12 2.7 3.12 4.86C18.54 18.42 16.2 21 13.2 21H2.4V2zm4.2 3.6v3.6h5.4c.9 0 1.56-.72 1.56-1.8s-.66-1.8-1.56-1.8H6.6zm0 7.2v3.6H13.2c1.02 0 1.74-.78 1.74-1.8s-.72-1.8-1.74-1.8H6.6z"/>
            </svg>
        );
    }

    return (
        <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l2.582 7.953H22.5l-6.79 4.933 2.582 7.953L12 18.012l-6.292 4.827 2.582-7.953L2 9.953h7.918z"/>
        </svg>
    );
}

/* ─── COMPONENT ─── */
export default function Hero() {
    const pathname = usePathname();

    const [activeIdx,    setActiveIdx]    = useState(0);
    const [displayedIdx, setDisplayedIdx] = useState(0);
    const [prevIdx,      setPrevIdx]      = useState<number | null>(null);
    const [transitioning, setTransitioning] = useState(false);

    const [showApartmentsMenu, setShowApartmentsMenu] = useState(false);
    const [showReviews,        setShowReviews]        = useState(false);
    const [hasLoaded,          setHasLoaded]          = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const timerRef    = useRef<number | null>(null);

    /* mark mounted so entry animation only fires once */
    useEffect(() => { setHasLoaded(true); }, []);

    /* close dropdown on outside click / route change */
    useEffect(() => {
        const close = (e: MouseEvent | TouchEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowApartmentsMenu(false);
            }
        };
        document.addEventListener("mousedown",  close);
        document.addEventListener("touchstart", close);
        return () => {
            document.removeEventListener("mousedown",  close);
            document.removeEventListener("touchstart", close);
        };
    }, []);

    useEffect(() => { setShowApartmentsMenu(false); }, [pathname]);

    /* slide transition */
    const goTo = (idx: number) => {
        if (transitioning || idx === activeIdx) return;
        setTransitioning(true);
        setPrevIdx(activeIdx);
        setActiveIdx(idx);
        setTimeout(() => setDisplayedIdx(idx), MIDPOINT);
        setTimeout(() => { setPrevIdx(null); setTransitioning(false); }, DURATION);
    };

    /* auto-advance */
    useEffect(() => {
        timerRef.current = window.setTimeout(
            () => goTo((activeIdx + 1) % APARTMENTS.length),
            INTERVAL,
        );
        return () => { if (timerRef.current !== null) clearTimeout(timerRef.current); };
    }, [activeIdx, transitioning]);

    const current   = APARTMENTS[activeIdx];
    const displayed = APARTMENTS[displayedIdx];
    const prev      = prevIdx !== null ? APARTMENTS[prevIdx] : null;

    return (
        <section className={styles.hero} aria-label="Hero">

            {/* ── BACKGROUND ── */}
            <div className={styles.backgroundLayer}>
                {prev && (
                    <div className={`${styles.bgSlide} ${styles.bgSlideOut}`}>
                        <Image
                            src={prev.image}
                            alt={prev.imageAlt}
                            fill
                            priority
                            className={styles.backgroundImage}
                        />
                    </div>
                )}
                <div className={`${styles.bgSlide} ${styles.bgSlideIn}`}>
                    <Image
                        src={current.image}
                        alt={current.imageAlt}
                        fill
                        priority
                        className={styles.backgroundImage}
                    />
                </div>
            </div>

            <div className={styles.darkOverlay} />
            <div className={styles.gridLines}   />
            <div className={styles.whiteReveal} />

            {/* ── MAIN FLEX LAYOUT ── */}
            <div className={styles.layout}>

                {/* TOP ROW */}
                <div className={styles.topRow}>
                    <p className={styles.brandName}>
                        Marmont /<br />
                        Apartment<br />
                        Marmont
                    </p>

                    <nav className={styles.nav} aria-label="Main navigation">
                        <div ref={dropdownRef} className={styles.navDropdown}>
                            <button
                                type="button"
                                className={`${styles.navLink} ${styles.navDropdownButton}`}
                                onClick={() => setShowApartmentsMenu(v => !v)}
                                aria-expanded={showApartmentsMenu}
                                aria-haspopup="menu"
                            >
                                Apartments
                                <span
                                    className={`${styles.navCaret} ${showApartmentsMenu ? styles.navCaretOpen : ""}`}
                                    aria-hidden="true"
                                >
                                    ▾
                                </span>
                            </button>

                            <div
                                className={`${styles.navMenu} ${showApartmentsMenu ? styles.navMenuOpen : ""}`}
                                role="menu"
                            >
                                <Link href="/split"  className={styles.navMenuItem} role="menuitem">Apartment Marmont</Link>
                                <Link href="/solta"  className={styles.navMenuItem} role="menuitem">Apartment Šolta</Link>
                            </div>
                        </div>

                        <a href="#about"   className={styles.navLink}>About</a>
                        <a href="#contact" className={styles.navLink}>Contact</a>
                    </nav>
                </div>

                {/* push content to bottom */}
                <div className={styles.spacer} />

                {/* TITLE */}
                <div className={styles.titleWrap}>
                    <h1
                        className={`${styles.title} ${
                            !hasLoaded   ? styles.titleEntering : ""
                        } ${transitioning ? styles.titleFading   : ""}`}
                    >
                        {displayed.title.split("\n").map((line, i) => (
                            <span key={i} style={{ display: "block" }}>{line}</span>
                        ))}
                    </h1>
                </div>

                {/* DESCRIPTION */}
                <p
                    className={`${styles.projectDescription} ${
                        transitioning ? styles.contentFading : ""
                    }`}
                >
                    {displayed.description}
                </p>

                {/* BOTTOM ROW */}
                <div className={styles.bottomRow}>

                    {/* Book Now */}
                    <a
                        href={displayed.bookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        Book Now
                        <span className={styles.ctaArrow} aria-hidden="true">↓</span>
                    </a>

                    {/* Reviews */}
                    <div
                        className={styles.reviewsWrapper}
                        onMouseEnter={() => setShowReviews(true)}
                        onMouseLeave={() => setShowReviews(false)}
                    >
                        <button
                            type="button"
                            className={styles.reviewsButton}
                            onClick={() => setShowReviews(v => !v)}
                            aria-expanded={showReviews}
                        >
                            <span className={styles.reviewsButtonLabel}>Our Reviews</span>
                            <span
                                className={`${styles.reviewsButtonScore} ${
                                    transitioning ? styles.contentFading : ""
                                }`}
                            >
                                {displayed.reviews.overall} ★
                            </span>
                        </button>

                        <div
                            className={`${styles.reviewsPanel} ${
                                showReviews ? styles.reviewsPanelVisible : ""
                            }`}
                            role="tooltip"
                        >
                            {displayed.reviews.platforms.map(p => (
                                <div key={p.name} className={styles.reviewItem}>
                                    <PlatformIcon name={p.name} />
                                    <div className={styles.reviewDetails}>
                                        <span className={styles.platformName}>{p.name}</span>
                                        <span className={styles.stars}>{"★".repeat(p.stars)}</span>
                                        <span className={styles.score}>{p.score} · {p.count} reviews</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DOTS */}
                <div className={styles.dotsRow} role="tablist" aria-label="Apartments">
                    {APARTMENTS.map((apt, i) => (
                        <button
                            key={apt.id}
                            role="tab"
                            aria-selected={i === activeIdx}
                            aria-label={apt.id}
                            className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ""}`}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}