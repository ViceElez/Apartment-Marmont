import SplitHeroSection from "@/app/split/components/SplitHeroSection";
import AmenitiesSection from "@/app/split/components/AmenitiesSection";
import DirectionsSection from "@/app/split/components/DirectionsSection";
import ExploreSection from "@/app/split/components/ExploreSection";
import StickyNav from "@/app/split/components/StickyNav";
import AboutSplitSection from "@/app/split/components/AboutSplitSection";
import GallerySection from "@/app/split/components/GallerySection";
import FooterCtaSection from "@/app/split/components/FooterCtaSection";
import PageEffects from "@/app/split/components/PageEffects";
import baseStyles from "@/app/split/components/style/SplitBase.module.css";

export default function SplitPage (){
    return(
        <main className={baseStyles.page}>
            <StickyNav />
            <SplitHeroSection />
            <AboutSplitSection />
            <GallerySection />
            <AmenitiesSection />
            <ExploreSection />
            <DirectionsSection />
            <FooterCtaSection />
            <PageEffects />
        </main>
    )
}