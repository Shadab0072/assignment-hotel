import HeroSection from "@/components/hero-section";
import WellnessIntro from "@/components/wellness-intro";
import SecondPortion from "@/components/secondPortion";
import StayPackages from "@/components/stayPackages";
import Amenities from "@/components/amenities";
import GastronomySection from "@/components/gastronomy-section";
import CorporateEvents from "@/components/corporate-events";
import HotelManagement from "@/components/hotelManagement";
import Footer from "@/components/footer";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <HeroSection />
      <WellnessIntro />
      <HotelManagement />
      <SecondPortion />
      <StayPackages />
      <Amenities />
      <GastronomySection />
      <About />
      <CorporateEvents />
      <Footer />
    </main>
  );
}
