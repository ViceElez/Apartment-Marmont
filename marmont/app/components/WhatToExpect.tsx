"use client";

import { useState } from "react";
import styles from "./styles/WhatToExpect.module.css";

const categories = [
    {
        id: "daytrips",
        label: "Day Trips",
        eyebrow: "01 — Explore",
        title: "Islands & National Parks",
        desc: "Plitvice Lakes and Krka waterfalls are under two hours away. Catch a morning ferry to Ugljan or Dugi Otok for a quieter side of Dalmatia — pine forests, hidden coves, and almost no crowds.",
        accent: "#7a9e8e",
        items: [
            { name: "Plitvice Lakes", detail: "1h 45min by car" },
            { name: "Krka Waterfalls", detail: "1h 20min by car" },
            { name: "Ugljan Island", detail: "25min by ferry" },
            { name: "Dugi Otok", detail: "1h 30min by ferry" },
        ],
        color: "#1a2820",
    },
    {
        id: "zadar",
        label: "Split",
        eyebrow: "02 — Discover",
        title: "The City Itself",
        desc: "Alfred Hitchcock called it the most beautiful sunset in the world. The Sea Organ hums with every wave. Roman ruins sit between boutique shops and ice cream stalls. Give yourself a full evening to wander.",
        accent: "#a08bb0",
        items: [
            { name: "Sea Organ", detail: "5min walk" },
            { name: "Greeting to the Sun", detail: "5min walk" },
            { name: "Roman Forum", detail: "8min walk" },
            { name: "City Walls", detail: "10min walk" },
        ],
        color: "#1a1520",
    },
    {
        id: "beaches",
        label: "Beaches",
        eyebrow: "03 — Unwind",
        title: "Sun & Sea",
        desc: "Saharun on Dugi Otok is worth the ferry alone — crystal clear water, white pebbles, almost no infrastructure. Kolovare is a 10 minute walk from the apartment for a quick morning swim.",
        accent: "#7ab0c4",
        items: [
            { name: "Saharun Beach", detail: "Dugi Otok, ferry + 10min" },
            { name: "Kolovare", detail: "10min walk" },
            { name: "Zaton Bay", detail: "20min by car" },
            { name: "Nin Lagoon", detail: "25min by car" },
        ],
        color: "#101820",
    },
];

export default function WhatToExpect() {
    const [active, setActive] = useState(categories[0].id);
    const [fading, setFading] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const current = categories.find((c) => c.id === active) ?? categories[0];
    const activeIndex = categories.findIndex((c) => c.id === active);

    const switchTo = (id: string) => {
        if (id === active) return;
        setHoveredItem(null);
        setFading(true);
        setTimeout(() => {
            setActive(id);
            setFading(false);
        }, 180);
    };

    return (
        <section className={styles.section} id="expect">
            <div className={styles.topFade} />

            <div className={styles.inner}>
                <div className={styles.header}>
                    <p className={styles.headerEyebrow}>While You're Here</p>
                    <h2 className={styles.headerTitle}>What to Expect</h2>
                    <p className={styles.headerSub}>
                        Split and its surroundings have more than enough to fill a week.
                        Here's what's worth your time.
                    </p>
                </div>

                <nav className={styles.tabs}>
                    {categories.map((cat, i) => (
                        <button
                            key={cat.id}
                            className={`${styles.tab} ${active === cat.id ? styles.tabActive : ""}`}
                            style={active === cat.id ? { color: cat.accent, borderColor: cat.accent } : undefined}
                            onClick={() => switchTo(cat.id)}
                        >
                            <span className={styles.tabNum}>0{i + 1}</span>
                            {cat.label}
                        </button>
                    ))}
                </nav>

                <div className={`${styles.content} ${fading ? styles.contentFade : ""}`}>
                    <div className={styles.contentLeft}>
                        <p className={styles.eyebrow} style={{ color: current.accent }}>
                            {current.eyebrow}
                        </p>
                        <h3 className={styles.title}>{current.title}</h3>
                        <p className={styles.desc}>{current.desc}</p>
                        <ul className={styles.list}>
                            {current.items.map((item) => (
                                <li
                                    key={item.name}
                                    className={styles.listItem}
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <span className={styles.listDot} style={{ background: current.accent }} />
                                    <span className={styles.listName}>{item.name}</span>
                                    <span className={styles.listDetail}>{item.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.contentRight}>
                        <div className={styles.imagePlaceholder} style={{ background: current.color }}>
                            <img
                                className={`${styles.imagePreview} ${hoveredItem ? styles.imagePreviewActive : ""}`}
                                src={
                                    hoveredItem === "Plitvice Lakes"
                                        ? "/images/split/destination/plitvice.webp"
                                        : hoveredItem === "Krka Waterfalls"
                                            ? "/images/split/destination/krka.webp"
                                            : hoveredItem === "Ugljan Island"
                                                ? "/images/split/destination/ugljan.webp"
                                                : hoveredItem === "Dugi Otok"
                                                    ? "/images/split/destination/dugi.webp"
                                                    : "/images/split/destination/krka.webp"
                                }
                                alt={hoveredItem ? `${hoveredItem} preview` : `${current.label} preview`}
                            />
                            <div
                                className={styles.imagePlaceholderGlow}
                                style={{ background: `radial-gradient(ellipse at 40% 50%, ${current.accent}22 0%, transparent 70%)` }}
                            />
                            <span className={styles.imagePlaceholderLabel} style={{ color: current.accent }}>
                                {current.label}
                            </span>
                        </div>
                        <div className={styles.progress}>
                            {categories.map((cat, i) => (
                                <button
                                    key={cat.id}
                                    className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                                    style={i === activeIndex ? { background: current.accent } : undefined}
                                    onClick={() => switchTo(cat.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div />
        </section>
    );
}