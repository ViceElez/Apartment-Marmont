import baseStyles from "./style/SoltaBase.module.css";
import styles from "./style/FooterSection.module.css";

export default function FooterCtaSection() {
    return (
        <section className={styles.footerCta} id="book">
            <div className={baseStyles.container}>
                <p className={baseStyles.label} style={{ justifyContent: "center", display: "flex" }}>Ready to stay?</p>
                <h2>Plan your island<br /><em>escape today</em></h2>
                <p>Placeholder text · Check-in from 14:00 · Check-out by 10:00</p>
                <a href="https://www.airbnb.com/rooms/11817985?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=1746179446&source_impression_id=p3_1779463646_P32iXIwD-WkG0io1&previous_page_section_name=1000&federated_search_id=4f3f34a8-1c6a-4ea1-89e0-0fa79fb03fc8" className={baseStyles.btn}>Check Availability</a>
            </div>
        </section>
    );
}
