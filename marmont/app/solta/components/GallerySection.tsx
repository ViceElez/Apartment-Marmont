"use client";

import { useState } from "react";
import ImageLightbox from "../../split/components/ImageLightbox";
import baseStyles from "./style/SoltaBase.module.css";
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
                    <p className={baseStyles.label}>Inside Apartment Šolta</p>
                    <h2>Soft light, calm spaces<br /><em>made for rest</em></h2>
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
                            src="/images/solta/bedroom/img1.webp"
                            alt="Bedroom main view"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox("/images/solta/bedroom/img1.webp", "Bedroom main view")}
                            onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/bedroom/img1.webp", "Bedroom main view")}
                        />
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/solta/bedroom/img2.webp"
                                alt="Bedroom linen detail"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/solta/bedroom/img2.webp", "Bedroom linen detail")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/bedroom/img2.webp", "Bedroom linen detail")}
                            />
                        </div>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/solta/bedroom/img3.webp"
                                alt="Bedroom dresser"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/solta/bedroom/img3.webp", "Bedroom dresser")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/bedroom/img3.webp", "Bedroom dresser")}
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.tabPanel} ${styles.galleryGrid3} ${activeTab === "bathroom" ? styles.active : ""}`} id="tab-bathroom">
                    <div className={`${styles.gImg} ${styles.tall}`}>
                        <img
                            className={styles.gImgPhoto}
                            src="/images/solta/wc/img3.webp"
                            alt="Bathroom full view"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox("/images/solta/wc/img3.webp", "Bathroom full view")}
                            onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/wc/img3.webp", "Bathroom full view")}
                        />
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/solta/wc/img2.webp"
                                alt="Bathroom detail"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/solta/wc/img2.webp", "Bathroom detail")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/wc/img2.webp", "Bathroom detail")}
                            />
                        </div>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/solta/wc/img4.webp"
                                alt="Bathroom vanity"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/solta/wc/img4.webp", "Bathroom vanity")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/wc/img4.webp", "Bathroom vanity")}
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.tabPanel} ${styles.galleryGrid3} ${activeTab === "living" ? styles.active : ""}`} id="tab-living">
                    <div className={`${styles.gImg} ${styles.tall}`}>
                        <img
                            className={styles.gImgPhoto}
                            src="/images/solta/livingroom/img1.webp"
                            alt="Living room main view"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox("/images/solta/livingroom/img1.webp", "Living room main view")}
                            onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/livingroom/img1.webp", "Living room main view")}
                        />
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/solta/livingroom/img3.webp"
                                alt="Living room detail"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/solta/livingroom/img3.webp", "Living room detail")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/livingroom/img3.webp", "Living room detail")}
                            />
                        </div>
                        <div className={`${styles.gImg} ${styles.med}`}>
                            <img
                                className={styles.gImgPhoto}
                                src="/images/solta/livingroom/img2.webp"
                                alt="Living room seating"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox("/images/solta/livingroom/img2.webp", "Living room seating")}
                                onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/livingroom/img2.webp", "Living room seating")}
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.tabPanel} ${styles.galleryGrid2} ${activeTab === "balcony" ? styles.active : ""}`} id="tab-balcony">
                    <div className={styles.gImg} style={{ height: "400px" }}>
                        <img
                            className={styles.gImgPhoto}
                            src="/images/solta/general/img1.webp"
                            alt="Balcony main view"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox("/images/solta/general/img1.webp", "Balcony main view")}
                            onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/general/img1.webp", "Balcony main view")}
                        />
                    </div>
                    <div className={styles.gImg} style={{ height: "400px" }}>
                        <img
                            className={styles.gImgPhoto}
                            src="/images/solta/general/img2.webp"
                            alt="Balcony seating"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox("/images/solta/general/img2.webp", "Balcony seating")}
                            onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/solta/general/img2.webp", "Balcony seating")}
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
