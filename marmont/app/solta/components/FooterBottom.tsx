import styles from "./style/FooterSection.module.css";

export default function FooterBottom() {
    return (
        <div className={styles.footerBottom}>
            <p>© 2025 Apartment Šolta, Croatia. All rights reserved.</p>
            <p style={{ color: "var(--gold)", fontFamily: "var(--ff-display)", fontSize: ".9rem", fontStyle: "italic" }}>
                Placeholder line for a closing note.
            </p>
        </div>
    );
}

