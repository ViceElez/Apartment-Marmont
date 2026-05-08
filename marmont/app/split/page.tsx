import HorizontalScroll from "@/app/components/HorizontalScroll";
import { beaches } from "@/app/data/split/beaches";
import { restaurants } from "@/app/data/split/restaurants";
import { nightlife } from "@/app/data/split/nightlife";
import { activities } from "@/app/data/split/activities";
import { amenities } from "@/app/data/split/amenities";
import { shopping } from "@/app/data/split/shopping";
import { topSights } from "@/app/data/split/topSights";

import styles from "./page.module.css";

export default function SplitPage() {
    return (
        <main className={styles.page}>

            <h1 className={styles.title}>Split City Guide</h1>

            <h2 className={styles.sectionTitle}>Amenities</h2>
            <HorizontalScroll items={amenities} />

            <h2 className={styles.sectionTitle}>Activities</h2>
            <HorizontalScroll items={activities} />

            <h2 className={styles.sectionTitle}>Shopping</h2>
            <HorizontalScroll items={shopping} />

            <h2 className={styles.sectionTitle}>Restaurants</h2>
            <HorizontalScroll items={restaurants} />

            <h2 className={styles.sectionTitle}>Nightlife</h2>
            <HorizontalScroll items={nightlife} />

            <h2 className={styles.sectionTitle}>Top Sights</h2>
            <HorizontalScroll items={topSights} />

            <h2 className={styles.sectionTitle}>Beaches</h2>
            <HorizontalScroll items={beaches} />

        </main>
    );
}