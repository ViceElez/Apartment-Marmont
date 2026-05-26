"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "@/app/split/components/style/SplitApartmentDetails.module.css";

type DetailItem = {
    id: string;
    label: string;
    images: [string, string, string];
};

const DETAILS: DetailItem[] = [
    {
        id: "sea-view-lounge",
        label: "Living Room",
        images: [
            "/images/solta/livingroom/img1.webp",
            "/images/solta/livingroom/img2.webp",
            "/images/solta/livingroom/img3.webp",
        ],
    },
    {
        id: "stone-terrace",
        label: "Bedroom",
        images: [
            "/images/solta/bedroom/img1.webp",
            "/images/solta/bedroom/img2.webp",
            "/images/solta/bedroom/img3.webp",
        ],
    },
    {
        id: "quiet-bedroom",
        label: "Balcony",
        images: [
            "/images/solta/general/img1.webp",
            "/images/solta/general/img2.webp",
            "/images/solta/general/img3.webp",
        ],
    },
    {
        id: "outdoor-dining",
        label: "Bathroom",
        images: [
            "/images/solta/wc/img1.webp",
            "/images/solta/wc/img2.webp",
            "/images/solta/wc/img3.webp",
        ],
    },
];

export default function SoltaApartmentDetails() {
    const [activeId, setActiveId] = useState(DETAILS[0].id);
    const [prevImage, setPrevImage] = useState<string | null>(null);
    const lastImageRef = useRef(DETAILS[0].images[0]);

    const activeDetail = DETAILS.find((detail) => detail.id === activeId) ?? DETAILS[0];

    useEffect(() => {
        if (lastImageRef.current !== activeDetail.images[0]) {
            setPrevImage(lastImageRef.current);
            lastImageRef.current = activeDetail.images[0];
        }
    }, [activeDetail.images[0]]);

    const handlePrevAnimationEnd = () => {
        setPrevImage(null);
    };

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <p className={styles.kicker}>Gallery</p>
                <h2 className={styles.title}>Moments on Šolta</h2>
            </div>

            <div className={styles.inner}>
                <div className={styles.left}>
                    <ul className={styles.list}>
                        {DETAILS.map((detail) => (
                            <li key={detail.id} className={styles.listItem}>
                                <button
                                    type="button"
                                    className={`${styles.listButton} ${
                                        activeId === detail.id ? styles.active : ""
                                    }`}
                                    onMouseEnter={() => setActiveId(detail.id)}
                                    onFocus={() => setActiveId(detail.id)}
                                >
                                    <span className={styles.label}>{detail.label}</span>
                                    <span className={styles.line} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.gallery}>
                    <div className={styles.galleryMain}>
                        {prevImage && (
                            <div
                                className={`${styles.imageLayer} ${styles.imagePrev}`}
                                onAnimationEnd={handlePrevAnimationEnd}
                            >
                                <Image
                                    src={prevImage}
                                    alt="Previous apartment view"
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 900px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        )}
                        <div
                            key={activeDetail.images[0]}
                            className={`${styles.imageLayer} ${styles.imageCurrent}`}
                        >
                            <Image
                                src={activeDetail.images[0]}
                                alt={`${activeDetail.label} view`}
                                fill
                                className={styles.image}
                                sizes="(max-width: 900px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>

                    <div key={activeId} className={styles.galleryStack}>
                        {activeDetail.images.slice(1).map((src, index) => (
                            <div
                                key={`${src}-${index}-${activeId}`}
                                className={`${styles.galleryItem} ${styles.galleryItemAnimated}`}
                            >
                                <Image
                                    src={src}
                                    alt={`${activeDetail.label} detail ${index + 2}`}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 900px) 100vw, 24vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
