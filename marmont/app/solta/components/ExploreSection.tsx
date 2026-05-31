"use client";

import { useState } from "react";
import baseStyles from "./style/SoltaBase.module.css";
import styles from "./style/ExploreSection.module.css";

export default function ExploreSection() {
    const [activeTab, setActiveTab] = useState("beaches");

    return (
        <section className={baseStyles.section} id="explore" style={{ background: "var(--mid)" }}>
            <div className={baseStyles.container}>
                <div className={`${baseStyles.sectionHeader} ${baseStyles.fadeUp}`}>
                    <p className={baseStyles.label}>Local Guide</p>
                    <h2>Discover Šolta<br /><em>at island pace</em></h2>
                    <div className={baseStyles.divider}></div>
                </div>

                <div className={styles.exploreTabs}>
                    <button
                        type="button"
                        className={`${styles.exploreTab} ${activeTab === "beaches" ? styles.active : ""}`}
                        onClick={() => setActiveTab("beaches")}
                    >
                        🏖 Coves
                    </button>
                    <button
                        type="button"
                        className={`${styles.exploreTab} ${activeTab === "restaurants" ? styles.active : ""}`}
                        onClick={() => setActiveTab("restaurants")}
                    >
                        🍽 Konobas
                    </button>
                    <button
                        type="button"
                        className={`${styles.exploreTab} ${activeTab === "nightlife" ? styles.active : ""}`}
                        onClick={() => setActiveTab("nightlife")}
                    >
                        🍷 Evenings
                    </button>
                    <button
                        type="button"
                        className={`${styles.exploreTab} ${activeTab === "sights" ? styles.active : ""}`}
                        onClick={() => setActiveTab("sights")}
                    >
                        🏛 Villages
                    </button>
                    <button
                        type="button"
                        className={`${styles.exploreTab} ${activeTab === "activities" ? styles.active : ""}`}
                        onClick={() => setActiveTab("activities")}
                    >
                        🚲 Trails
                    </button>
                    <button
                        type="button"
                        className={`${styles.exploreTab} ${activeTab === "shopping" ? styles.active : ""}`}
                        onClick={() => setActiveTab("shopping")}
                    >
                        🫒 Local Finds
                    </button>
                </div>

                <div className={`${styles.explorePanel} ${activeTab === "beaches" ? styles.active : ""}`} id="exp-beaches">
                    <div className={styles.exploreCards}>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🏖<br />Quiet Cove Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Hidden Cove</h4>
                                <p>Placeholder text about a calm bay with crystal water and soft shoreline. Replace with real details later.</p>
                                <div className={styles.exploreCardMeta}>📍 Short drive &nbsp;·&nbsp; Secluded</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🏖<br />Pebble Beach Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Pebble Beach</h4>
                                <p>Placeholder text about a family-friendly beach with calm water and afternoon shade.</p>
                                <div className={styles.exploreCardMeta}>📍 Nearby &nbsp;·&nbsp; Pebble beach</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🏖<br />Sunset Bay Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Sunset Bay</h4>
                                <p>Placeholder text for a sunset-facing swim spot with a calm atmosphere.</p>
                                <div className={styles.exploreCardMeta}>📍 Easy access &nbsp;·&nbsp; Sunset views</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.explorePanel} ${activeTab === "restaurants" ? styles.active : ""}`} id="exp-restaurants">
                    <div className={styles.exploreCards}>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🍽<br />Konoba Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Local Konoba</h4>
                                <p>Placeholder text about slow-cooked dishes, island olive oil, and fresh seafood.</p>
                                <div className={styles.exploreCardMeta}>📍 Village center &nbsp;·&nbsp; Island cuisine</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🍽<br />Taverna Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Harbor Taverna</h4>
                                <p>Placeholder text about waterfront dining and sunset dinners.</p>
                                <div className={styles.exploreCardMeta}>📍 Harbor &nbsp;·&nbsp; Sea view</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🍽<br />Wine Bar Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Island Wine Bar</h4>
                                <p>Placeholder text about local wines and small plates.</p>
                                <div className={styles.exploreCardMeta}>📍 Old stone street &nbsp;·&nbsp; Wine & tapas</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.explorePanel} ${activeTab === "nightlife" ? styles.active : ""}`} id="exp-nightlife">
                    <div className={styles.exploreCards}>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🍷<br />Evening Walk Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Evening Strolls</h4>
                                <p>Placeholder text about calm night walks and quiet waterfronts.</p>
                                <div className={styles.exploreCardMeta}>📍 Village lanes &nbsp;·&nbsp; Low-key</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🍷<br />Harbor Lights Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Harbor Lights</h4>
                                <p>Placeholder text about late dinners and the sound of the sea.</p>
                                <div className={styles.exploreCardMeta}>📍 Harbor &nbsp;·&nbsp; Evening views</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🍷<br />Terrace Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Terrace Drinks</h4>
                                <p>Placeholder text about relaxed cocktails under the stars.</p>
                                <div className={styles.exploreCardMeta}>📍 Courtyard &nbsp;·&nbsp; Quiet nights</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.explorePanel} ${activeTab === "sights" ? styles.active : ""}`} id="exp-sights">
                    <div className={styles.exploreCards}>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🏛<br />Stone Village Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Stone Village</h4>
                                <p>Placeholder text about historic streets and island architecture.</p>
                                <div className={styles.exploreCardMeta}>📍 Old village &nbsp;·&nbsp; Heritage</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🏛<br />Viewpoint Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Island Viewpoint</h4>
                                <p>Placeholder text about panoramic views over the Adriatic.</p>
                                <div className={styles.exploreCardMeta}>📍 Short hike &nbsp;·&nbsp; Views</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🏛<br />Harbor Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Harbor Life</h4>
                                <p>Placeholder text about boats, cafés, and slow mornings.</p>
                                <div className={styles.exploreCardMeta}>📍 Waterfront &nbsp;·&nbsp; Local life</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.explorePanel} ${activeTab === "activities" ? styles.active : ""}`} id="exp-activities">
                    <div className={styles.exploreCards}>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🚲<br />Cycling Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Island Cycling</h4>
                                <p>Placeholder text about quiet roads and scenic routes.</p>
                                <div className={styles.exploreCardMeta}>📍 Trails &nbsp;·&nbsp; Half-day</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🚲<br />Kayak Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Sea Kayaking</h4>
                                <p>Placeholder text about calm bays and crystal water.</p>
                                <div className={styles.exploreCardMeta}>📍 Coastline &nbsp;·&nbsp; Half-day</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🚲<br />Olive Grove Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Olive Groves</h4>
                                <p>Placeholder text about walking paths and shaded groves.</p>
                                <div className={styles.exploreCardMeta}>📍 Inland &nbsp;·&nbsp; Easy walk</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.explorePanel} ${activeTab === "shopping" ? styles.active : ""}`} id="exp-shopping">
                    <div className={styles.exploreCards}>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🫒<br />Olive Oil Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Olive Oil</h4>
                                <p>Placeholder text about local oil and island produce.</p>
                                <div className={styles.exploreCardMeta}>📍 Local shop &nbsp;·&nbsp; Artisan</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🫒<br />Lavender Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Lavender Goods</h4>
                                <p>Placeholder text about handmade soaps and oils.</p>
                                <div className={styles.exploreCardMeta}>📍 Village market &nbsp;·&nbsp; Local crafts</div>
                            </div>
                        </div>
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreCardImg}><div className={styles.exploreCardImgPlaceholder}>🫒<br />Souvenir Photo</div></div>
                            <div className={styles.exploreCardBody}>
                                <h4>Island Souvenirs</h4>
                                <p>Placeholder text about small keepsakes and gifts.</p>
                                <div className={styles.exploreCardMeta}>📍 Harbor street &nbsp;·&nbsp; Gifts</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

