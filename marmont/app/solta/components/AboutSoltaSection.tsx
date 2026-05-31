import baseStyles from "./style/SoltaBase.module.css";
import styles from "./style/AboutSoltaSection.module.css";

export default function AboutSoltaSection() {
    return (
        <section className={baseStyles.section} id="about">
            <div className={baseStyles.container}>
                <div className={styles.islandGrid}>
                    <div className={`${styles.islandImageStack} ${baseStyles.fadeUp}`}>
                        <div className={styles.imgMain}>
                            <img
                                className={styles.gImg}
                                src="/images/solta/about/img.webp"
                                alt="Šolta coastline"
                            />
                        </div>
                        <div className={styles.imgAccent}>
                            <img
                                className={styles.gImg}
                                src="/images/solta/general/img3.webp"
                                alt="Šolta village detail"
                            />
                        </div>
                    </div>

                    <div className={`${baseStyles.fadeUp} ${baseStyles.delay2}`}>
                        <div className={baseStyles.sectionHeader}>
                            <p className={baseStyles.label}>Šolta, Croatia</p>
                            <h2>A quiet island escape<br /><em>of stone and sea</em></h2>
                            <div className={baseStyles.divider}></div>
                        </div>
                        <p style={{ marginBottom: "20px" }}>
                            Placeholder text about Šolta — a calm, authentic island with coves, stone villages, and slow summer evenings. Replace with your final copy when ready.
                        </p>
                        <p>
                            Placeholder text describing local life, the coastline, and the short ferry connection from Split. Replace with your final copy when ready.
                        </p>
                        <div className={styles.islandFacts}>
                            <div className={styles.islandFact}>
                                <div className={styles.num}>1950</div>
                                <span>Island heritage</span>
                            </div>
                            <div className={styles.islandFact}>
                                <div className={styles.num}>24 km</div>
                                <span>Coastline to explore</span>
                            </div>
                            <div className={styles.islandFact}>
                                <div className={styles.num}>40 min</div>
                                <span>Ferry from Split</span>
                            </div>
                            <div className={styles.islandFact}>
                                <div className={styles.num}>Local</div>
                                <span>Quiet village life</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
