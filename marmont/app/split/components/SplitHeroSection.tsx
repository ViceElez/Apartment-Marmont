import Image from "next/image";
import styles from "./style/SplitHeroSection.module.css";

export default function SplitHeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.imageWrap}>
                <Image
                    src="/images/split/SplitCity.webp"
                    alt="Split city waterfront with Diocletian's Palace and Adriatic sea"
                    fill
                    className={styles.image}
                    priority
                    sizes="100vw"
                />
                <div className={styles.overlay} />

                <div className={styles.text}>
                    <p className={styles.kicker}>Split Apartment</p>
                    <h1 className={styles.title}>A Perfect Retreat by the Adriatic</h1>
                    <p className={styles.description}>
                        Sunlit interiors, a calm city rhythm, and a stay that feels effortlessly refined.
                    </p>
                    <a
                        className={styles.cta}
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Book now
                    </a>
                </div>
            </div>
        </section>
    );
}