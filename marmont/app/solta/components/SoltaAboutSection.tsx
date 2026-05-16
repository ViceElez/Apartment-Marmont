import Image from "next/image";
import styles from "@/app/split/components/style/SplitAboutSection.module.css";

export default function SoltaAboutSection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.textBlock}>
                    <p className={styles.kicker}>About us</p>
                    <h2 className={styles.title}>A stone island stay with modern comfort</h2>
                    <p className={styles.description}>
                        Welcome to our apartment on Šolta, where sea views and island stillness
                        define the mood. The interiors are bright and simple, designed for a
                        relaxed, unhurried escape.
                    </p>
                    <p className={styles.description}>
                        Walk to the waterfront, linger on the terrace, and return to a calm space
                        that feels effortless and intimate.
                    </p>
                    <button type="button" className={styles.button}>Read more</button>
                </div>

                <div className={styles.imageCard}>
                    <Image
                        src="/images/solta/SoltaBuilding.webp"
                        alt="Apartment Šolta exterior"
                        fill
                        className={styles.image}
                        sizes="(max-width: 900px) 100vw, 45vw"
                    />
                </div>
            </div>
        </section>
    );
}

