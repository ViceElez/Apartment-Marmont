import Carousel from "@/app/components/Carousel";
import { beaches } from "@/app/data/split/beaches";
import { restaurants } from "@/app/data/split/restaurants";
import { nightlife } from "@/app/data/split/nightlife";
import { activities } from "@/app/data/split/activities";
import { amenities } from "@/app/data/split/amenities";
import { shopping } from "@/app/data/split/shopping";
import { topSights } from "@/app/data/split/topSights";
import SoltaApartmentDetails from "@/app/solta/components/SoltaApartmentDetails";
import SoltaAboutSection from "@/app/solta/components/SoltaAboutSection";
import SoltaHeroSection from "@/app/solta/components/SoltaHeroSection";

import styles from "../split/page.module.css";

const buildCarouselItems = (items: { id: string; name: string; type: string; address: string; distanceFromApartment?: string; hours?: string; icon?: string; }[]) =>
    items.map((item, index) => ({
        id: index,
        title: item.name,
        description: [item.type, item.address, item.distanceFromApartment, item.hours].filter(Boolean).join(" | "),
        icon: item.icon ?? ""
    }));

export default function SoltaPage(){
    return(
        <main className={styles.page}>
            <div className={styles.content}>
                <SoltaHeroSection />
                <SoltaAboutSection />
                <SoltaApartmentDetails />

                <div className={styles.carouselGrid}>
                    <section className={styles.carouselSection}>
                        <h2 className={styles.sectionTitle}>Amenities</h2>
                        <div className={styles.carouselWrapper}>
                            <Carousel items={buildCarouselItems(amenities)} autoplay autoplayDelay={3200} pauseOnHover loop={true} />
                        </div>
                    </section>

                    <section className={styles.carouselSection}>
                        <h2 className={styles.sectionTitle}>Activities</h2>
                        <div className={styles.carouselWrapper}>
                            <Carousel items={buildCarouselItems(activities)} autoplay autoplayDelay={3200} pauseOnHover loop={true} />
                        </div>
                    </section>

                    <section className={styles.carouselSection}>
                        <h2 className={styles.sectionTitle}>Shopping</h2>
                        <div className={styles.carouselWrapper}>
                            <Carousel items={buildCarouselItems(shopping)} autoplay autoplayDelay={3200} pauseOnHover loop={true} />
                        </div>
                    </section>

                    <section className={styles.carouselSection}>
                        <h2 className={styles.sectionTitle}>Restaurants</h2>
                        <div className={styles.carouselWrapper}>
                            <Carousel items={buildCarouselItems(restaurants)} autoplay autoplayDelay={3200} pauseOnHover loop={true} />
                        </div>
                    </section>

                    <section className={styles.carouselSection}>
                        <h2 className={styles.sectionTitle}>Nightlife</h2>
                        <div className={styles.carouselWrapper}>
                            <Carousel items={buildCarouselItems(nightlife)} autoplay autoplayDelay={3200} pauseOnHover loop={true} />
                        </div>
                    </section>

                    <section className={styles.carouselSection}>
                        <h2 className={styles.sectionTitle}>Top Sights</h2>
                        <div className={styles.carouselWrapper}>
                            <Carousel items={buildCarouselItems(topSights)} autoplay autoplayDelay={3200} pauseOnHover loop={true} />
                        </div>
                    </section>

                    <section className={styles.carouselSection}>
                        <h2 className={styles.sectionTitle}>Beaches</h2>
                        <div className={styles.carouselWrapper}>
                            <Carousel items={buildCarouselItems(beaches)} autoplay autoplayDelay={3200} pauseOnHover loop={true} />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}