import baseStyles from "./style/SplitBase.module.css";
import styles from "./style/FooterSection.module.css";

export default function FooterCtaSection() {
    return (
        <section className={styles.footerCta} id="book">
            <div className={baseStyles.container}>
                <p className={baseStyles.label} style={{ justifyContent: "center", display: "flex" }}>Ready to stay?</p>
                <h2>Book your Adriatic<br /><em>escape today</em></h2>
                <p>Minimum 3 nights · Check-in from 14:00 · Check-out by 10:00</p>
                <a
                    href="https://www.airbnb.com/rooms/34916497?source_impression_id=p3_1780258295_P3E7NfYMY7G2k-6K"
                    className={baseStyles.btn}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check Availability
                </a>
            </div>
        </section>
    );
}
