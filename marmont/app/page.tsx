import HeroSection from "@/app/components/HeroSection";
import Review from "@/app/components/Reviews";
import ApartmentsSection from "@/app/components/ApartmentsSection";
import WhatToExpect from "@/app/components/WhatToExpect";


export default function Home() {
  return (
      <main>
          <HeroSection />
          <ApartmentsSection/>
          <WhatToExpect />
          <Review />
      </main>
  );
}
