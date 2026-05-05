import HeroSection from "@/app/components/HeroSection";
import SplitApartmentSection from "@/app/components/SplitApartmentSection";
import {SplitApartmentText} from "@/app/components/SplitApartmentText";
import {SoltaApartmentText} from "@/app/components/SoltaApartmentText";
import {SoltaApartmentSection} from "@/app/components/SoltaApartmentSection";



export default function Home() {
  return (
      <main>
          <HeroSection />
          <SplitApartmentSection />
          <SplitApartmentText />
          <SoltaApartmentSection/>
          <SoltaApartmentText />
      </main>
  );
}
