"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "@/app/split/components/style/SplitApartmentDetails.module.css";

type DetailItem = {
    id: string;
    label: string;
    image: string;
};

const DETAILS: DetailItem[] = [
    {
        id: "sea-view-lounge",
        label: "Sea-view lounge",
        image: "/images/solta/SoltaFull.webp",
    },
    {
        id: "stone-terrace",
        label: "Stone terrace",
        image: "/images/solta/SoltaBuilding.webp",
    },
    {
        id: "quiet-bedroom",
        label: "Quiet bedroom",
        image: "/images/solta/SoltaFull.webp",
    },
    {
        id: "outdoor-dining",
        label: "Outdoor dining",
        image: "/images/solta/SoltaBuilding.webp",
    },
];

const GALLERY_IMAGES = [
    {
        src: "/images/solta/SoltaFull.webp",
        alt: "Apartment Šolta view",
    },
    {
        src: "/images/solta/SoltaBuilding.webp",
        alt: "Apartment Šolta exterior",
    },
    {
        src: "/images/solta/SoltaFull.webp",
        alt: "Apartment Šolta view",
    },
];

export default function SoltaApartmentDetails() {
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

