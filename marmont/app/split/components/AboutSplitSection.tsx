import baseStyles from "./style/SplitBase.module.css";
import styles from "./style/AboutSplitSection.module.css";

export default function AboutSplitSection() {
    return (
        <section className={baseStyles.section} id="about">
            <div className={baseStyles.container}>
                <div className={styles.cityGrid}>
                    <div className={`${styles.cityImageStack} ${baseStyles.fadeUp}`}>
                        <div className={styles.imgMain}>
                            <img
                                className={styles.gImg}
                                src="/images/split/destination/riva.webp"
                                alt="Split waterfront"
                            />
                        </div>
                        <div className={styles.imgAccent}>
                            <img
                                className={styles.gImg}
                                src="/images/split/destination/dioc.webp"
                                alt="Diocletian's Palace"
                            />
                        </div>
                    </div>

                    <div className={`${baseStyles.fadeUp} ${baseStyles.delay2}`}>
                        <div className={baseStyles.sectionHeader}>
                            <p className={baseStyles.label}>Split, Croatia</p>
                            <h2>A living museum on<br /><em>the Dalmatian coast</em></h2>
                            <div className={baseStyles.divider}></div>
                        </div>
                        <p style={{ marginBottom: "20px" }}>
                            Split is one of Europe&apos;s most extraordinary cities — a 1,700-year-old Roman palace that people still call home. Within its walls you&apos;ll find cafés, boutiques, churches, and ancient squares that blur the line between history and everyday life.
                        </p>
                        <p>
                            The city sits on a sun-drenched peninsula jutting into the cerulean Adriatic. Its promenade, the Riva, buzzes with life from morning coffee to midnight cocktails, while the old town&apos;s labyrinthine alleys hide some of Dalmatia&apos;s finest restaurants and bars.
                        </p>
                        <div className={styles.cityFacts}>
                            <div className={styles.cityFact}>
                                <div className={styles.num}>1700<sup style={{ fontSize: "1rem" }}>+</sup></div>
                                <span>Years of history</span>
                            </div>
                            <div className={styles.cityFact}>
                                <div className={styles.num}>250</div>
                                <span>Sunny days / year</span>
                            </div>
                            <div className={styles.cityFact}>
                                <div className={styles.num}>5 min</div>
                                <span>Walk to the sea</span>
                            </div>
                            <div className={styles.cityFact}>
                                <div className={styles.num}>UNESCO</div>
                                <span>World Heritage site</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
