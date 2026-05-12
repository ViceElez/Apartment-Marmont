import HeroSection from "@/app/components/HeroSection";
import Review from "@/app/components/Reviews";
import ApartmentsSection from "@/app/components/ApartmentsSection";


export default function Home() {
  return (
      <main>
          <HeroSection />
          <ApartmentsSection/>
          <Review />
      </main>
  );
}
