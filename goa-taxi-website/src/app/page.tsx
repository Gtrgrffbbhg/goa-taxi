import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import AirportTaxi from "@/components/AirportTaxi";
import Fleet from "@/components/Fleet";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Destinations from "@/components/Destinations";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <TrustBar />

      <Services />

      <AirportTaxi />

      <Fleet />

      <Packages/>

      <WhyChooseUs />

      <Destinations/>

      <Reviews/>

      <About/>

      <FAQ/>

    <FinalCTA/>

      <Footer />

      <MobileBookingBar />
      
    </main>
  );
}