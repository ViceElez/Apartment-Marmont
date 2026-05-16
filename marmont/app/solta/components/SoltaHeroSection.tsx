import Image from "next/image";
import Link from "next/link";
import styles from "@/app/split/components/style/SplitHeroSection.module.css";

export default function SoltaHeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.imageWrap}>
                <Image
                    src="/images/solta/SoltaFull.webp"
                    alt="Apartment Šolta with Adriatic sea view"
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
                        <Link href="/split" className={styles.soltaButton}>
                            Apartment Marmont
                        </Link>
                    </div>
                </header>

                {/* ── HERO TEXT ── */}
                <div className={styles.text}>
                    <p className={styles.kicker}>Šolta Apartment</p>
                    <h1 className={styles.title}>
                        Island calm<br />with sea views
                    </h1>
                    <p className={styles.description}>
                        A quiet retreat on Šolta with sunlit interiors, coastal breezes, and an
                        easy rhythm made for slow mornings.
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

