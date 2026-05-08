'use client';

import { useRef, useEffect } from "react";
import styles from "./styles/HorizontalScroll.module.css";

export type SplitItem = {
    id: string;
    name: string;
    type: string;
    address: string;
    distanceFromApartment?: string;
    hours?: string;
    icon?: string;
};

function getMapsUrl(address: string) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export default function HorizontalScroll({ items }: { items: SplitItem[] }) {

    const trackRef = useRef<HTMLDivElement>(null);
    const position = useRef(0);
    const speed = 0.25;

    const dragging = useRef(false);
    const startX = useRef(0);

    const doubled = [...items, ...items];

    useEffect(() => {
        let raf: number;

        const loop = () => {
            const el = trackRef.current;

            if (el && !dragging.current) {
                const half = el.scrollWidth / 2;

                position.current -= speed;

                if (Math.abs(position.current) >= half) {
                    position.current = 0;
                }

                el.style.transform = `translateX(${position.current}px)`;
            }

            raf = requestAnimationFrame(loop);
        };

        loop();
        return () => cancelAnimationFrame(raf);
    }, []);

    const onDown = (e: React.MouseEvent) => {
        dragging.current = true;
        startX.current = e.clientX;
    };

    const onMove = (e: React.MouseEvent) => {
        if (!dragging.current || !trackRef.current) return;

        const delta = e.clientX - startX.current;

        position.current += delta * 1.1;
        trackRef.current.style.transform = `translateX(${position.current}px)`;

        startX.current = e.clientX;
    };

    const onUp = () => {
        dragging.current = false;
    };

    return (
        <section className={styles.section}>
            <div className={styles.scrollWrapper}>

                <div
                    ref={trackRef}
                    className={styles.track}
                    onMouseDown={onDown}
                    onMouseMove={onMove}
                    onMouseUp={onUp}
                    onMouseLeave={onUp}
                >
                    {doubled.map((item, i) => (
                        <Card key={`${item.id}-${i}`} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function Card({ item }: { item: SplitItem }) {
    const url = getMapsUrl(item.address);

    return (
        <a href={url} target="_blank" className={styles.card}>
            <div className={styles.cardRow}>
                <div className={styles.cardTitle}>{item.name}</div>
                <div className={styles.cardPrice}>{item.type}</div>
            </div>

            <div className={styles.cardIngredients}>{item.address}</div>

            {(item.distanceFromApartment || item.hours) && (
                <div className={styles.cardMeta}>
                    {item.distanceFromApartment && (
                        <span className={styles.cardMetaItem}>{item.distanceFromApartment}</span>
                    )}
                    {item.hours && (
                        <span className={styles.cardMetaItem}>{item.hours}</span>
                    )}
                </div>
            )}
        </a>
    );
}