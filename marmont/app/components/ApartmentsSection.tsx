"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles/ApartmentsSection.module.css";
import { apartments } from "@/app/data/briefApartmentsData";

export default function ApartmentsSection() {
    const [activeId, setActiveId] = useState(apartments[0].id);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobileSticky, setIsMobileSticky] = useState(false);
    const [panelHeight, setPanelHeight] = useState(0);

    const prevIdRef = useRef(apartments[0].id);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const outerRef = useRef<HTMLDivElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);

    const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    const setSectionRef =
        (id: string) => (el: HTMLDivElement | null) => {
            if (el) sectionRefs.current.set(id, el);
            else sectionRefs.current.delete(id);
        };

    // ── Desktop: IntersectionObserver inside the internal scroll wrapper ──
    useEffect(() => {
        if (!wrapperRef.current) return;
        const isMobile = window.innerWidth <= 768;
        if (isMobile) return;

        const observer = new IntersectionObserver(
            (entries) => {
                let bestEntry: IntersectionObserverEntry | null = null;
                let bestRatio = 0;

                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    if (entry.intersectionRatio > bestRatio) {
                        bestRatio = entry.intersectionRatio;
                        bestEntry = entry;
                    }
                }

                if (!bestEntry) return;

                const id = (bestEntry.target as HTMLElement).dataset.aptId;
                if (id && id !== prevIdRef.current) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                        setActiveId(id);
                        prevIdRef.current = id;
                        setIsTransitioning(false);
                    }, 150);
                }
            },
            {
                root: wrapperRef.current,
                threshold: [0.2, 0.5, 0.8],
            }
        );

        sectionRefs.current.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // ── Mobile: single scroll handler for both sticky + active section ──
    useEffect(() => {
        const checkMobile = () => window.innerWidth <= 768;
        if (!checkMobile()) return;

        const handleScroll = () => {
            if (!outerRef.current || !panelRef.current) return;

            const ph = panelRef.current.offsetHeight;
            setPanelHeight(ph);

            const outerRect = outerRef.current.getBoundingClientRect();

            // sticky logic
            const shouldStick =
                outerRect.top <= 0 && outerRect.bottom > ph;
            setIsMobileSticky(shouldStick);

            // active section logic
            let closestId: string | null = null;
            let closestDistance = Infinity;

            sectionRefs.current.forEach((el, id) => {
                const rect = el.getBoundingClientRect();
                const distance = Math.abs(rect.top - ph);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestId = id;
                }
            });

            if (closestId && closestId !== prevIdRef.current) {
                setIsTransitioning(true);
                setTimeout(() => {
                    setActiveId(closestId!);
                    prevIdRef.current = closestId!;
                    setIsTransitioning(false);
                }, 150);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const current = apartments.find((a) => a.id === activeId) ?? apartments[0];
    const activeIndex = apartments.findIndex((a) => a.id === activeId);

    return (
        <div ref={outerRef} className={styles.outerWrapper}>
            <div ref={wrapperRef} className={styles.wrapper}>

                {/* SPACER — holds space when panel becomes fixed on mobile */}
                {isMobileSticky && (
                    <div style={{ height: panelHeight, width: "100%", flexShrink: 0 }} />
                )}

                {/* LEFT PANEL */}
                <aside
                    ref={panelRef}
                    className={`${styles.stickyPanel} ${isMobileSticky ? styles.mobileStickyActive : ""}`}
                >
                    <div
                        className={styles.accentBar}
                        style={{ background: current.accent }}
                    />

                    <div
                        className={`${styles.panelContent} ${
                            isTransitioning ? styles.panelFade : ""
                        }`}
                    >
                        <p className={styles.eyebrow}>{current.label}</p>
                        <h2 className={styles.aptTitle}>{current.title}</h2>
                        <p className={styles.location}>
                            <span
                                className={styles.locationDot}
                                style={{ background: current.accent }}
                            />
                            {current.location}
                        </p>
                        <div className={styles.tagRow}>
                            <span
                                className={styles.tag}
                                style={{
                                    color: current.accent,
                                    borderColor: current.accent,
                                }}
                            >
                                {current.tag}
                            </span>
                        </div>
                        <p className={styles.desc}>{current.desc}</p>
                        <div className={styles.priceLine}>
                            <span className={styles.price}>{current.price}</span>
                            <span className={styles.per}>{current.per}</span>
                        </div>
                        <a
                            className={styles.cta}
                            style={{ background: current.accent }}
                            href={current.bookingUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {current.cta}
                        </a>
                    </div>

                    <div className={styles.progress}>
                        {apartments.map((apt, i) => (
                            <div
                                key={apt.id}
                                className={`${styles.dot} ${
                                    i === activeIndex ? styles.dotActive : ""
                                }`}
                                style={
                                    i === activeIndex
                                        ? { background: current.accent }
                                        : undefined
                                }
                            />
                        ))}
                    </div>
                </aside>

                {/* RIGHT SCROLL AREA */}
                <div className={styles.scrollColumn}>
                    {apartments.map((apt, aptIndex) => (
                        <section
                            key={apt.id}
                            ref={setSectionRef(apt.id)}
                            data-apt-id={apt.id}
                            className={styles.apartmentBlock}
                        >
                            {aptIndex > 0 && (
                                <div className={styles.dividerBar}>
                                    <div
                                        className={styles.dividerLine}
                                        style={{ background: apt.accent }}
                                    />
                                    <span className={styles.dividerLabel}>
                                        {apt.label} — {apt.title}
                                    </span>
                                    <div
                                        className={styles.dividerLine}
                                        style={{ background: apt.accent }}
                                    />
                                </div>
                            )}

                            {apt.rooms.map((room) => (
                                <div
                                    key={`${apt.id}-${room.label}`}
                                    className={styles.roomSection}
                                >
                                    {room.img ? (
                                        <Image
                                            src={room.img}
                                            alt={`${apt.title} — ${room.label}`}
                                            fill
                                            className={styles.roomImage}
                                            sizes="(max-width: 768px) 100vw, 58vw"
                                        />
                                    ) : (
                                        <div
                                            className={styles.roomColorFill}
                                            style={{
                                                background: room.color ?? "#111",
                                            }}
                                        />
                                    )}

                                    <div className={styles.roomCaption}>
                                        <span
                                            className={styles.roomLabel}
                                            style={{ color: apt.accent }}
                                        >
                                            {room.label}
                                        </span>
                                        <span className={styles.roomNote}>
                                            {room.note}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}