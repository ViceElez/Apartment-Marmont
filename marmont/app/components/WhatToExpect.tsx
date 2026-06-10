"use client";

import { useState } from "react";
import styles from "./styles/WhatToExpect.module.css";

const imageMap: Record<string, string> = {
    "Plitvice Lakes": "/images/split/destination/plitvice.webp",
    "Krka Waterfalls": "/images/split/destination/krka.webp",
    "Ugljan Island": "/images/split/destination/ugljan.webp",
    "Dugi Otok": "/images/split/destination/dugi.webp",
    "Diocletian's Palace": "/images/split/destination/dioc1.webp",
    "Riva Promenade": "/images/split/destination/riva1.webp",
    "Cathedral of Saint Domnius": "/images/split/destination/duje.webp",
    "Marjan Hill": "/images/split/destination/marjan.webp",
    "Bačvice Beach": "/images/split/destination/bacvice.webp",    "Kašjuni Beach": "/images/split/destination/kasjuni.webp",
    "Bene Beach": "/images/split/destination/bene.webp",
    "Žnjan Beach": "/images/split/destination/znjan.webp",
};

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
        desc: "Built around the 1,700-year-old Diocletian's Palace, Split blends ancient Roman history with lively cafés, waterfront promenades, and hidden stone alleys. Spend an evening exploring the Old Town before watching the sunset along the Riva.",
        accent: "#a08bb0",
        items: [
            { name: "Diocletian's Palace", detail: "Historic center" },
            { name: "Riva Promenade", detail: "Waterfront walk" },
            { name: "Cathedral of Saint Domnius", detail: "5min walk" },
            { name: "Marjan Hill", detail: "10min walk" },
        ],
        color: "#1a1520",
    },
    {
        id: "beaches",
        label: "Beaches",
        eyebrow: "03 — Unwind",
        title: "Sun & Sea",
        desc: "Split offers everything from lively city beaches to quiet coves beneath pine trees. Bačvice is famous for its shallow waters and local game of picigin, while Kašjuni and Bene provide a more relaxed escape with views of the Adriatic.",
        accent: "#7ab0c4",
        items: [
            { name: "Bačvice Beach", detail: "15min walk" },
            { name: "Kašjuni Beach", detail: "10min by car" },
            { name: "Bene Beach", detail: "15min walk" },
            { name: "Žnjan Beach", detail: "15min by car" },
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
                                src={hoveredItem && imageMap[hoveredItem] ? imageMap[hoveredItem] : imageMap[current.items[0]?.name] || "/images/split/destination/krka.webp"}
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