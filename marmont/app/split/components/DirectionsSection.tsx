"use client";

import { useState } from "react";
import baseStyles from "./style/SplitBase.module.css";
import styles from "./style/DirectionsSection.module.css";
import ImageLightbox from "./ImageLightbox";

export default function DirectionsSection() {
    const [activeTab, setActiveTab] = useState("airport");
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

    const openLightbox = (src: string, alt: string) => {
        setLightbox({ src, alt });
    };

    return (
        <section className={`${baseStyles.section} ${styles.directionsSection}`} id="directions">
            <div className={baseStyles.container}>
                <div className={`${baseStyles.sectionHeader} ${baseStyles.fadeUp}`}>
                    <p className={baseStyles.label}>Getting Here</p>
                    <h2>Your journey<br /><em>starts here</em></h2>
                    <div className={baseStyles.divider}></div>
                </div>

                <div className={styles.directionsToggle}>
                    <button
                        type="button"
                        className={`${styles.dirTab} ${activeTab === "airport" ? styles.active : ""}`}
                        onClick={() => setActiveTab("airport")}
                    >
                        ✈ From the Airport
                    </button>
                    <button
                        type="button"
                        className={`${styles.dirTab} ${activeTab === "ferry" ? styles.active : ""}`}
                        onClick={() => setActiveTab("ferry")}
                    >
                        ⛴ From the Ferry Port
                    </button>
                </div>

                <div className={`${styles.dirPanel} ${activeTab === "airport" ? styles.active : ""}`} id="dir-airport">
                    <div className={styles.airportSteps}>
                        <div className={`${styles.airportStep} ${baseStyles.fadeUp}`}>
                            <div className={styles.stepNum}>1</div>
                            <div className={styles.stepContent}>
                                <h4>Exit Arrivals & board the airport bus</h4>
                                <p>After collecting your luggage, follow signs to the exit. Outside you&apos;ll find the <strong style={{ color: "var(--text)" }}>Pleso Prijevoz shuttle bus</strong> departing regularly to Split city centre. Tickets can be purchased from the driver (approx. €5). The ride takes about <strong style={{ color: "var(--text)" }}>30 minutes</strong> depending on traffic.</p>
                                <div className={styles.stepDuration}>⏱ 0 – 30 min</div>
                            </div>
                        </div>

                        <div className={`${styles.airportStep} ${baseStyles.fadeUp} ${baseStyles.delay1}`}>
                            <div className={styles.stepNum}>2</div>
                            <div className={styles.stepContent}>
                                <h4>Arrive at the Bus Terminal (Autobusni kolodvor)</h4>
                                <p>The shuttle drops you at <strong style={{ color: "var(--text)" }}>Split Bus Station</strong>, located right at the waterfront next to the ferry port. You&apos;re now in the heart of the city, just steps from the Riva promenade.</p>
                                <div className={styles.stepDuration}>⏱ 30 – 35 min</div>
                            </div>
                        </div>

                        <div className={`${styles.airportStep} ${baseStyles.fadeUp} ${baseStyles.delay2}`}>
                            <div className={styles.stepNum}>3</div>
                            <div className={styles.stepContent}>
                                <h4>Walk along the Riva promenade heading east</h4>
                                <p>From the bus station, step onto the <strong style={{ color: "var(--text)" }}>Riva</strong> — Split&apos;s iconic seafront. Walk eastward (with the sea on your right) for approximately <strong style={{ color: "var(--text)" }}>8 minutes</strong> past the palace&apos;s southern face, the Bronze Gate, and the palm-lined waterfront cafés.</p>
                                <div className={styles.stepDuration}>⏱ 35 – 43 min</div>
                            </div>
                        </div>

                        <div className={`${styles.airportStep} ${baseStyles.fadeUp} ${baseStyles.delay3}`}>
                            <div className={styles.stepNum}>4</div>
                            <div className={styles.stepContent}>
                                <h4>Arrive at the apartment — welcome home</h4>
                                <p>Turn left into <strong style={{ color: "var(--text)" }}>Ulica Kralja Tomislava</strong> and look for the building with the dark green door. Ring the buzzer on apartment <strong style={{ color: "var(--text)" }}>Šolta</strong>. A lockbox with a key code will be provided in your booking confirmation. Total journey: approximately <strong style={{ color: "var(--text)" }}>45 minutes</strong> door to door.</p>
                                <div className={styles.stepDuration}>⏱ ~45 min total</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.dirPanel} ${activeTab === "ferry" ? styles.active : ""}`} id="dir-ferry">
                    <div className={styles.ferrySteps}>
                        <div className={styles.ferryStep}>
                            <div className={styles.ferryStepImages}>
                                <div className={styles.ferryStepImg}>
                                    <img
                                        className={styles.ferryStepImgPhoto}
                                        src="/images/split/direction/step1.webp"
                                        alt="Route step 1"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => openLightbox("/images/split/direction/step1.webp", "Route step 1")}
                                        onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/direction/step1.webp", "Route step 1")}
                                    />
                                    <span className={styles.imgLabel}>Your path</span>
                                </div>
                                <div className={styles.ferryStepImg}>
                                    <img
                                        className={styles.ferryStepImgPhoto}
                                        src="/images/split/direction/locationGoalStep1.webp"
                                        alt="Goal step 1"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => openLightbox("/images/split/direction/locationGoalStep1.webp", "Goal step 1")}
                                        onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/direction/locationGoalStep1.webp", "Goal step 1")}
                                    />
                                    <span className={styles.imgLabel}>Goal</span>
                                </div>
                            </div>
                            <div className={styles.ferryStepText}>
                                <div className={styles.stepBadge}>
                                    <div className={styles.stepBadgeNum}>1</div>
                                    <span className={styles.stepBadgeLbl}>Disembark & orient</span>
                                </div>
                                <h4>Leave the ferry terminal onto the Riva</h4>
                                <p>Step off the ferry and walk through the arrivals hall of the <strong style={{ color: "var(--text)" }}>Split Ferry Port (Trajektna luka)</strong>. As you exit the terminal building, you&apos;ll emerge directly onto the <strong style={{ color: "var(--text)" }}>Riva promenade</strong> — the long waterfront boulevard lined with palm trees and café terraces. The sea will be directly in front of you. Take a moment to get your bearings — the old town&apos;s palace walls are unmistakable to your right.</p>
                                <div className={styles.stepDuration}>⏱ 0 – 5 min</div>
                            </div>
                        </div>

                        <div className={styles.ferryStep}>
                            <div className={styles.ferryStepImages}>
                                <div className={styles.ferryStepImg}>
                                    <img
                                        className={styles.ferryStepImgPhoto}
                                        src="/images/split/direction/step2.webp"
                                        alt="Route step 2"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => openLightbox("/images/split/direction/step2.webp", "Route step 2")}
                                        onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/direction/step2.webp", "Route step 2")}
                                    />
                                    <span className={styles.imgLabel}>Your path</span>
                                </div>
                                <div className={styles.ferryStepImg}>
                                    <img
                                        className={styles.ferryStepImgPhoto}
                                        src="/images/split/direction/locationGoalStep2.webp"
                                        alt="Goal step 2"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => openLightbox("/images/split/direction/locationGoalStep2.webp", "Goal step 2")}
                                        onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/direction/locationGoalStep2.webp", "Goal step 2")}
                                    />
                                    <span className={styles.imgLabel}>Goal</span>
                                </div>
                            </div>
                            <div className={styles.ferryStepText}>
                                <div className={styles.stepBadge}>
                                    <div className={styles.stepBadgeNum}>2</div>
                                    <span className={styles.stepBadgeLbl}>Walk the Riva</span>
                                </div>
                                <h4>Head east along the Riva — pass the Bronze Gate</h4>
                                <p>Turn right and walk eastward along the Riva, keeping the sea on your right. You&apos;ll pass the grand palace walls on your left with the famous <strong style={{ color: "var(--text)" }}>Bronze Gate (Brončana vrata)</strong> — a large arched opening in the wall. Don&apos;t go through it yet — keep walking another 3 minutes past the gate until you see a cluster of outdoor restaurant tables at the eastern end of the promenade.</p>
                                <div className={styles.stepDuration}>⏱ 5 – 13 min</div>
                            </div>
                        </div>

                        <div className={styles.ferryStep}>
                            <div className={styles.ferryStepImages}>
                                <div className={styles.ferryStepImg}>
                                    <img
                                        className={styles.ferryStepImgPhoto}
                                        src="/images/split/direction/step3.webp"
                                        alt="Route step 3"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => openLightbox("/images/split/direction/step3.webp", "Route step 3")}
                                        onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/direction/step3.webp", "Route step 3")}
                                    />
                                    <span className={styles.imgLabel}>Your path</span>
                                </div>
                                <div className={styles.ferryStepImg}>
                                    <img
                                        className={styles.ferryStepImgPhoto}
                                        src="/images/split/direction/locationGoalStep3.webp"
                                        alt="Goal step 3"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => openLightbox("/images/split/direction/locationGoalStep3.webp", "Goal step 3")}
                                        onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/direction/locationGoalStep3.webp", "Goal step 3")}
                                    />
                                    <span className={styles.imgLabel}>Goal</span>
                                </div>
                            </div>
                            <div className={styles.ferryStepText}>
                                <div className={styles.stepBadge}>
                                    <div className={styles.stepBadgeNum}>3</div>
                                    <span className={styles.stepBadgeLbl}>Turn inland</span>
                                </div>
                                <h4>Turn left onto Ulica Kralja Tomislava</h4>
                                <p>At the eastern edge of the Riva, where the restaurants end, turn left (away from the sea) into <strong style={{ color: "var(--text)" }}>Ulica Kralja Tomislava</strong>. This is a quieter residential street that rises gently away from the waterfront. You&apos;ll notice older stone buildings on either side, some draped in bougainvillea in summer. Walk up the street for approximately <strong style={{ color: "var(--text)" }}>90 metres</strong> — about 60–70 normal steps.</p>
                                <div className={styles.stepDuration}>⏱ 13 – 17 min</div>
                            </div>
                        </div>

                        <div className={styles.ferryStep}>
                            <div className={styles.ferryStepImages}>
                                <div className={styles.ferryStepImg}>
                                    <img
                                        className={styles.ferryStepImgPhoto}
                                        src="/images/split/direction/step4.webp"
                                        alt="Route step 4"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => openLightbox("/images/split/direction/step4.webp", "Route step 4")}
                                        onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/direction/step4.webp", "Route step 4")}
                                    />
                                    <span className={styles.imgLabel}>Your path</span>
                                </div>
                                <div className={styles.ferryStepImg}>
                                    <img
                                        className={styles.ferryStepImgPhoto}
                                        src="/images/split/direction/locationGoalStep4.webp"
                                        alt="Goal step 4"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => openLightbox("/images/split/direction/locationGoalStep4.webp", "Goal step 4")}
                                        onKeyDown={(event) => event.key === "Enter" && openLightbox("/images/split/direction/locationGoalStep4.webp", "Goal step 4")}
                                    />
                                    <span className={styles.imgLabel}>Goal</span>
                                </div>
                            </div>
                            <div className={styles.ferryStepText}>
                                <div className={styles.stepBadge}>
                                    <div className={styles.stepBadgeNum}>4</div>
                                    <span className={styles.stepBadgeLbl}>You&apos;ve arrived</span>
                                </div>
                                <h4>Find the green door — you&apos;re home</h4>
                                <p>On your left you&apos;ll see a building with a <strong style={{ color: "var(--text)" }}>dark green entrance door</strong>. The buzzer panel is mounted on the right side of the doorframe — press the button labelled <strong style={{ color: "var(--text)" }}>&quot;Šolta&quot;</strong>. Once inside, take the stairs to the <strong style={{ color: "var(--text)" }}>first floor</strong>. The apartment door faces the open inner courtyard. Your key code was sent in your booking confirmation — enter it into the lockbox to retrieve the key. Welcome!</p>
                                <div className={styles.stepDuration}>⏱ ~20 min from ferry &nbsp;·&nbsp; Total on foot</div>
                            </div>
                        </div>
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
