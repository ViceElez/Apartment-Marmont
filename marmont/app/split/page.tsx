import Carousel from "@/app/components/Carousel";
import { beaches } from "@/app/data/split/beaches";
import { restaurants } from "@/app/data/split/restaurants";
import { nightlife } from "@/app/data/split/nightlife";
import { activities } from "@/app/data/split/activities";
import { amenities } from "@/app/data/split/amenities";
import { shopping } from "@/app/data/split/shopping";
import { topSights } from "@/app/data/split/topSights";
import SplitApartmentDetails from "@/app/split/components/SplitApartmentDetails";
import SplitAboutSection from "@/app/split/components/SplitAboutSection";
import SplitHeroSection from "@/app/split/components/SplitHeroSection";
import SplitDirectionsStepper from "@/app/split/components/SplitDirectionsStepper";

import styles from "./page.module.css";

const buildCarouselItems = (items: { id: string; name: string; type: string; address: string; distanceFromApartment?: string; hours?: string; icon?: string; }[]) =>
    items.map((item, index) => ({
        id: index,
        title: item.name,
        description: [item.type, item.address, item.distanceFromApartment, item.hours].filter(Boolean).join(" | "),
        icon: item.icon ?? ""
    }));

export default function SplitPage() {
    return (
        <main className={styles.page}>
            <div className={styles.content}>
                <SplitHeroSection />
                <SplitAboutSection />
                <SplitApartmentDetails />

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

                <section className={styles.directionsSection}>
                    <div className={styles.directionsHeader}>
                        <h2 className={styles.sectionTitle}>Directions</h2>
                        <p className={styles.directionsIntro}>
                            Step-by-step guidance to Apartment Marmont from the main arrival points.
                        </p>
                    </div>

                    <div className={styles.directionsAccordion}>
                        <details className={styles.directionsItem} open>
                            <summary className={styles.directionsSummary}>Split Airport</summary>
                            <div className={styles.directionsBody}>
                                <div className={styles.directionsText}>
                                    <p>
                                        After landing at Split Airport (SPU), follow the signs to the main exit. You will
                                        see the airport bus stop straight ahead. Take the official airport shuttle bus
                                        to Split city center (the final stop is by the ferry port).
                                    </p>
                                    <p>
                                        From the bus stop, walk along the promenade toward Riva. Keep the sea on your
                                        right, pass the palm-lined walkway, and continue for about 10 minutes until you
                                        reach Trumbiceva obala 15. The building sits just off the waterfront.
                                    </p>
                                    <p>
                                        If you prefer, book a taxi or private transfer; travel time is typically
                                        35–45 minutes depending on traffic.
                                    </p>
                                </div>
                                <div className={styles.directionsImages}>
                                    <div className={styles.directionsImageCard}>
                                        <img src="/images/split/SplitCity.webp" alt="Split Airport arrival exit" />
                                        <span className={styles.directionsCaption}>Exit the terminal to the shuttle stop.</span>
                                    </div>
                                    <div className={styles.directionsImageCard}>
                                        <img src="/images/split/SplitBuildings.PNG" alt="Split promenade toward Riva" />
                                        <span className={styles.directionsCaption}>Walk the Riva promenade toward the old town.</span>
                                    </div>
                                    <div className={styles.directionsImageCard}>
                                        <img src="/images/split/SplitCity.webp" alt="Apartment Marmont nearby waterfront" />
                                        <span className={styles.directionsCaption}>Apartment Marmont sits just off the waterfront.</span>
                                    </div>
                                </div>
                            </div>
                        </details>

                        <details className={styles.directionsItem}>
                            <summary className={styles.directionsSummary}>Taxi stop</summary>
                            <div className={styles.directionsBody}>
                                <div className={styles.directionsText}>
                                    <p>
                                        The main taxi stand is beside the ferry terminal. Tell the driver “Riva,
                                        Trumbiceva obala 15” or “Apartment Marmont.” It is a short ride along the
                                        waterfront, usually under 10 minutes.
                                    </p>
                                    <p>
                                        If you are arriving with luggage, ask to be dropped near the promenade entrance
                                        so you can easily roll your bags to the building.
                                    </p>
                                </div>
                                <div className={styles.directionsImages}>
                                    <div className={styles.directionsImageCard}>
                                        <img src="/images/split/SplitCity.webp" alt="Split taxi rank near the port" />
                                        <span className={styles.directionsCaption}>Find the taxi stand by the port exit.</span>
                                    </div>
                                    <div className={styles.directionsImageCard}>
                                        <img src="/images/split/SplitBuildings.PNG" alt="Taxi route along the waterfront" />
                                        <span className={styles.directionsCaption}>A short ride along the waterfront.</span>
                                    </div>
                                </div>
                            </div>
                        </details>

                        <details className={styles.directionsItem}>
                            <summary className={styles.directionsSummary}>Ferry port</summary>
                            <div className={styles.directionsBody}>
                                <SplitDirectionsStepper />
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </main>
    );
}