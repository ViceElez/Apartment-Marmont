import Image from "next/image";
import Link from "next/link";
import styles from "./style/SplitHeroSection.module.css";

export default function SplitHeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.imageWrap}>
                <Image
                    src="/images/split/general/SplitCity.webp"
                    alt="Split city waterfront with Diocletian's Palace and Adriatic sea"
                    fill
                    className={styles.image}
                    priority
                    sizes="100vw"
                />
                <div className={styles.overlay} />

                {/* ── TOP BAR ── */}
                <header className={styles.topBar}>
                    {/* left spacer — mirrors the button width so logo stays centred */}
                    <div className={styles.topBarSide} />

                    <Link href="/" className={styles.logoLink} aria-label="Back to home">
                        <Image
                            src="/images/logo.jpg"
                            alt="Apartment Marmont logo"
                            width={80}
                            height={80}
                            className={styles.logo}
                            priority
                        />
                    </Link>

                    <div className={styles.topBarSide}>
                        <Link href="/solta" className={styles.soltaButton}>
                            Apartment Šolta
                        </Link>
                    </div>
                </header>

                {/* ── HERO TEXT ── */}
                <div className={styles.text}>
                    <p className={styles.kicker}>Split Apartment</p>
                    <h1 className={styles.title}>
                        A Perfect Retreat<br />by the Adriatic
                    </h1>
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