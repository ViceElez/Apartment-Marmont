import Image from "next/image";
import styles from "./style/SplitAboutSection.module.css";

export default function SplitAboutSection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.textBlock}>
                    <p className={styles.kicker}>About us</p>
                    <h2 className={styles.title}>A calm city base with timeless style</h2>
                    <p className={styles.description}>
                        Welcome to our Split apartment, where modern comfort meets the charm of the old
                        town. Every detail is curated for a relaxed stay, from sunlit spaces to a
                        walkable city rhythm just outside the door.
                    </p>
                    <p className={styles.description}>
                        Whether you are here for a seaside escape or a cultural weekend, the apartment
                        offers a serene retreat with effortless access to the best of Split.
                    </p>
                    <button type="button" className={styles.button}>Read more</button>
                </div>

                <div className={styles.imageCard}>
                    <Image
                        src="/images/split/livingRoom2.webp"
                        alt="Split apartment interior"
                        fill
                        className={styles.image}
                        sizes="(max-width: 900px) 100vw, 45vw"
                    />
                </div>
            </div>
        </section>
    );
}

