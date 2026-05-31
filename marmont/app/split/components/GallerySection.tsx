"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";
import baseStyles from "./style/SplitBase.module.css";
import styles from "./style/GallerySection.module.css";

export default function GallerySection() {
    const [activeTab, setActiveTab] = useState("bedroom");
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

    const openLightbox = (src: string, alt: string) => {
        setLightbox({ src, alt });
    };

    return (
        <section className={`${baseStyles.section} ${styles.gallerySection}`} id="gallery">
            <div className={baseStyles.container}>
                <div className={`${baseStyles.sectionHeader} ${baseStyles.fadeUp}`}>
                    <p className={baseStyles.label}>Inside the Apartment</p>
                    <h2>Every corner, crafted<br /><em>for comfort</em></h2>
                    <div className={baseStyles.divider}></div>
                </div>

                <div className={styles.tabBar}>
                    <button
                        type="button"
                        className={`${styles.tabBtn} ${activeTab === "bedroom" ? styles.active : ""}`}
                        onClick={() => setActiveTab("bedroom")}
                    >
                        Bedroom
                    </button>
                    <button
                        type="button"
                        className={`${styles.tabBtn} ${activeTab === "bathroom" ? styles.active : ""}`}
                        onClick={() => setActiveTab("bathroom")}
                    >
                        Bathroom
                    </button>
                    <button
                        type="button"
                        className={`${styles.tabBtn} ${activeTab === "living" ? styles.active : ""}`}
                        onClick={() => setActiveTab("living")}
                    >
                        Living Room
                    </button>
                    <button
                        type="button"
                        className={`${styles.tabBtn} ${activeTab === "balcony" ? styles.active : ""}`}
                        onClick={() => setActiveTab("balcony")}
                    >
                        Balcony
                    </button>
                </div>

                <div className={`${styles.tabPanel} ${styles.galleryGrid3} ${activeTab === "bedroom" ? styles.active : ""}`} id="tab-bedroom">
                    <div className={`${styles.gImg} ${styles.tall}`}>
                        <img
                            className={styles.gImgPhoto}
                            src="/images/split/bedroom/img1.webp"
                            alt="Master bedroom main view"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox("/images/split/bedroom/img1.webp", "Master bedroom main view")}
                            onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/bedroom/img1.webp", "Master bedroom main view")}
                        />
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/split/bedroom/img3.webp"
                                alt="Bedroom detail"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/split/bedroom/img3.webp", "Bedroom detail")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/bedroom/img3.webp", "Bedroom detail")}
                            />
                        </div>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/split/bedroom/img2.webp"
                                alt="Wardrobe and dresser"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/split/bedroom/img2.webp", "Wardrobe and dresser")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/bedroom/img2.webp", "Wardrobe and dresser")}
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.tabPanel} ${styles.galleryGrid3} ${activeTab === "bathroom" ? styles.active : ""}`} id="tab-bathroom">
                    <div className={`${styles.gImg} ${styles.tall}`}>
                        <img
                            className={styles.gImgPhoto}
                            src="/images/split/wc/img3.webp"
                            alt="Bathroom full view"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox("/images/split/wc/img3.webp", "Bathroom full view")}
                            onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/wc/img3.webp", "Bathroom full view")}
                        />
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/split/wc/img1.webp"
                                alt="Rainfall shower detail"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/split/wc/img1.webp", "Rainfall shower detail")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/wc/img1.webp", "Rainfall shower detail")}
                            />
                        </div>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/split/wc/img2.webp"
                                alt="Vanity and toiletries"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/split/wc/img2.webp", "Vanity and toiletries")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/wc/img2.webp", "Vanity and toiletries")}
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.tabPanel} ${styles.galleryGrid3} ${activeTab === "living" ? styles.active : ""}`} id="tab-living">
                    <div className={`${styles.gImg} ${styles.tall}`}>
                        <img
                            className={styles.gImgPhoto}
                            src="/images/split/livingRoom/img3.webp"
                            alt="Living room main view"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox("/images/split/livingRoom/img3.webp", "Living room main view")}
                            onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/livingRoom/img3.webp", "Living room main view")}
                        />
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/split/livingRoom/img1.webp"
                                alt="Dining area"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/split/livingRoom/img1.webp", "Dining area")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/livingRoom/img1.webp", "Dining area")}
                            />
                        </div>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/split/livingRoom/kuzina.webp"
                                alt="Kitchen detail"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/split/livingRoom/kuzina.webp", "Kitchen detail")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/livingRoom/kuzina.webp", "Kitchen detail")}
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.tabPanel} ${styles.galleryGrid2} ${activeTab === "balcony" ? styles.active : ""}`} id="tab-balcony">
                    <div className={styles.gImg} style={{ height: "400px" }}>
                        <img
                            className={styles.gImgPhoto}
                            src="/images/split/general/marmont_teraca1.webp"
                            alt="Balcony main view"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox("/images/split/general/marmont_teraca1.webp", "Balcony main view")}
                            onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/general/marmont_teraca1.webp", "Balcony main view")}
                        />
                    </div>
                    <div className={styles.gImg} style={{ height: "400px" }}>
                        <img
                            className={styles.gImgPhoto}
                            src="/images/split/general/marmont_teraca1.webp"
                            alt="Balcony seating"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox("/images/split/general/marmont_teraca1.webp", "Balcony seating")}
                            onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/general/marmont_teraca1.webp", "Balcony seating")}
                        />
                    </div>
                </div>
            </div>
            <ImageLightbox
                isOpen={Boolean(lightbox)}
                src={lightbox?.src ?? ""}
                alt={lightbox?.alt}
                onClose={() => setLightbox(null)}
            />
        </section>
    );
}
