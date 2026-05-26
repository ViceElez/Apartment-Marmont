import SoltaApartmentDetails from "@/app/solta/components/SoltaApartmentDetails";
import SoltaAboutSection from "@/app/solta/components/SoltaAboutSection";
import SoltaHeroSection from "@/app/solta/components/SoltaHeroSection";

import styles from "../split/page.module.css";

export default function SoltaPage(){
    return(
        <main className={styles.page}>
            <div className={styles.content}>
                <SoltaHeroSection />
                <SoltaAboutSection />
                <SoltaApartmentDetails />
            </div>
        </main>
    )
}