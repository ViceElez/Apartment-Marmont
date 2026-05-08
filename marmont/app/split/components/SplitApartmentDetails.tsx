"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./style/SplitApartmentDetails.module.css";

type DetailItem = {
    id: string;
    label: string;
    image: string;
};

const DETAILS: DetailItem[] = [
    {
        id: "living-room",
        label: "Living room",
        image: "/images/split/livingRoom1.webp",
    },
    {
        id: "bathroom",
        label: "Bathroom",
        image: "/images/split/livingRoom2.webp",
    },
    {
        id: "bedroom",
        label: "Bedroom",
        image: "/images/split/livingRoom1.webp",
    },
    {
        id: "balcony",
        label: "Balcony",
        image: "/images/split/livingRoom2.webp",
    },
];

const GALLERY_IMAGES = [
    {
        src: "/images/split/livingRoom1.webp",
        alt: "Split apartment view",
    },
    {
        src: "/images/split/livingRoom2.webp",
        alt: "Split apartment view",
    },
    {
        src: "/images/split/livingRoom1.webp",
        alt: "Split apartment view",
    },
];

export default function SplitApartmentDetails() {
    const [activeId, setActiveId] = useState(DETAILS[0].id);
    const [prevImage, setPrevImage] = useState<string | null>(null);
    const lastImageRef = useRef(DETAILS[0].image);

    const activeDetail = DETAILS.find((detail) => detail.id === activeId) ?? DETAILS[0];

    useEffect(() => {
        if (lastImageRef.current !== activeDetail.image) {
            setPrevImage(lastImageRef.current);
            lastImageRef.current = activeDetail.image;
        }
    }, [activeDetail.image]);

    const handlePrevAnimationEnd = () => {
        setPrevImage(null);
    };

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <p className={styles.kicker}>Gallery</p>
                <h2 className={styles.title}>Captured Moments</h2>
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
                            key={activeDetail.image}
                            className={`${styles.imageLayer} ${styles.imageCurrent}`}
                        >
                            <Image
                                src={activeDetail.image}
                                alt={`${activeDetail.label} view`}
                                fill
                                className={styles.image}
                                sizes="(max-width: 900px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>

                    <div key={activeId} className={styles.galleryStack}>
                        {GALLERY_IMAGES.slice(0, 2).map((image, index) => (
                            <div
                                key={`${image.src}-${index}-${activeId}`}
                                className={`${styles.galleryItem} ${styles.galleryItemAnimated}`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
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
