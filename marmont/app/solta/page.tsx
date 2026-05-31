import AboutSoltaSection from "@/app/solta/components/AboutSoltaSection";
import FooterCtaSection from "@/app/solta/components/FooterCtaSection";
import GallerySection from "@/app/solta/components/GallerySection";
import PageEffects from "@/app/solta/components/PageEffects";
import StickyNav from "@/app/solta/components/StickyNav";
import baseStyles from "@/app/solta/components/style/SoltaBase.module.css";
import SoltaHeroSection from "@/app/solta/components/SoltaHeroSection";

export default function SoltaPage(){
    return(
        <main className={baseStyles.page}>
            <StickyNav />
            <SoltaHeroSection />
            <AboutSoltaSection />
            <GallerySection />
            <FooterCtaSection />
            <PageEffects />
        </main>
    )
}