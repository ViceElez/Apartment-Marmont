import baseStyles from "./style/SoltaBase.module.css";
import styles from "./style/StickyNav.module.css";

export default function StickyNav() {
    return (
        <nav className={styles.stickyNav}>
            <div className={styles.stickyNavInner}>
                <span className={styles.brand}>Apartment Šolta</span>
                <ul className={styles.navLinks}>
                    <li><a href="#about">About Šolta</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                </ul>
                <a href="https://www.airbnb.com/rooms/11817985?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=1746179446&source_impression_id=p3_1779463646_P32iXIwD-WkG0io1&previous_page_section_name=1000&federated_search_id=4f3f34a8-1c6a-4ea1-89e0-0fa79fb03fc8" className={baseStyles.btn}>Book Now</a>
            </div>
        </nav>
    );
}
