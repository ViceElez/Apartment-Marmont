import baseStyles from "./style/SplitBase.module.css";
import styles from "./style/AmenitiesSection.module.css";

export default function AmenitiesSection() {
    return (
        <section className={baseStyles.section} id="amenities">
            <div className={baseStyles.container}>
                <div className={`${baseStyles.sectionHeader} ${baseStyles.fadeUp}`}>
                    <p className={baseStyles.label}>What&apos;s included</p>
                    <h2>Everything you need,<br /><em>nothing superfluous</em></h2>
                    <div className={baseStyles.divider}></div>
                </div>

                <div className={`${styles.amenitiesGrid} ${baseStyles.fadeUp} ${baseStyles.delay1}`}>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>📶</div><span className={styles.amenityName}>High-speed Wi-Fi</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>❄️</div><span className={styles.amenityName}>Air Conditioning</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>📺</div><span className={styles.amenityName}>Smart TV / Netflix</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>☕</div><span className={styles.amenityName}>Espresso Machine</span></div>

                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🍳</div><span className={styles.amenityName}>Fully Equipped Kitchen</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🫧</div><span className={styles.amenityName}>Washing Machine</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🚿</div><span className={styles.amenityName}>Rainfall Shower</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🛏️</div><span className={styles.amenityName}>Premium Bedding</span></div>

                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🪟</div><span className={styles.amenityName}>Private Balcony</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🔑</div><span className={styles.amenityName}>Self Check-in</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🅿️</div><span className={styles.amenityName}>Nearby Parking</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🏛️</div><span className={styles.amenityName}>Old Town – 5 min walk</span></div>

                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🧴</div><span className={styles.amenityName}>Luxury Toiletries</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🗺️</div><span className={styles.amenityName}>Local Guide Provided</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🛡️</div><span className={styles.amenityName}>Security Deposit Box</span></div>
                    <div className={styles.amenityItem}><div className={styles.amenityIcon}>🧹</div><span className={styles.amenityName}>Mid-stay Cleaning</span></div>
                </div>
            </div>
        </section>
    );
}
