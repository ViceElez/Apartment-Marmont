import styles from "./style/FooterSection.module.css";

export default function FooterBottom() {
    return (
        <div className={styles.footerBottom}>
            <p>© 2025 Apartment Marmont, Split, Croatia. All rights reserved.</p>
            <p style={{ color: "var(--gold)", fontFamily: "var(--ff-display)", fontSize: ".9rem", fontStyle: "italic" }}>
                Designed with care for unforgettable stays.
            </p>
        </div>
    );
}
