import baseStyles from "./style/SplitBase.module.css";
import styles from "./style/StickyNav.module.css";

export default function StickyNav() {
    return (
        <nav className={styles.stickyNav}>
            <div className={styles.stickyNavInner}>
                <span className={styles.brand}>Apartment Marmont</span>
                <ul className={styles.navLinks}>
                    <li><a href="#about">About Split</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#amenities">Amenities</a></li>
                    <li><a href="#explore">Explore</a></li>
                    <li><a href="#directions">Getting Here</a></li>
                </ul>
                <a
                    href="https://www.airbnb.com/rooms/34916497?source_impression_id=p3_1780258295_P3E7NfYMY7G2k-6K"
                    className={baseStyles.btn}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book Now
                </a>
            </div>
        </nav>
    );
}
