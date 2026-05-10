"use client"

import React, { useEffect, useState } from "react";
import styles from "./styles/Reviews.module.css";
import { reviews, reviewStats } from "../data/reviews";
import CardSwap, { Card } from "./CardSwap";

function useCardSize() {
    const [size, setSize] = useState({ width: 400, height: 280 });

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w <= 480) {
                setSize({ width: Math.min(w - 48, 360), height: 260 });
            } else if (w <= 768) {
                setSize({ width: Math.min(w - 64, 400), height: 270 });
            } else {
                setSize({ width: 400, height: 280 });
            }
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return size;
}

export default function ReviewSection() {
    const { width, height } = useCardSize();

    return (
        <section className={styles.section}>
            {/* Watermark */}
            <h2 className={styles.watermark}>What<br />they say?</h2>

            {/* Left column: stars + stats */}
            <div className={styles.left}>
                <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={styles.star}>★</span>
                    ))}
                </div>

                <div className={styles.stats}>
                    {reviewStats.map((stat) => (
                        <div key={stat.label} className={styles.statItem}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right column: CardSwap stack */}
            <div className={styles.right}>
                <CardSwap
                    width={width}
                    height={height}
                    cardDistance={50}
                    verticalDistance={60}
                    delay={3500}
                    pauseOnHover
                    skewAmount={4}
                    easing="elastic"
                >
                    {reviews.map((review) => (
                        <Card key={review.id}>
                            <div className={styles.cardInner}>
                                <span className={styles.cardIndex}>{review.title}</span>
                                <p className={styles.cardQuote}>{review.quote}</p>
                                <footer className={styles.cardFooter}>
                                    <span className={styles.cardAuthor}>— {review.name}</span>
                                </footer>
                            </div>
                        </Card>
                    ))}
                </CardSwap>
            </div>
        </section>
    );
}