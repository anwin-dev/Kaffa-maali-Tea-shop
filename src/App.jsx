import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import VisitUs from "./components/VisitUs";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 1. Preloader Loading screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main shell elements (only fully scrollable/interactive after load) */}
      {!isLoading && (
        <div className="relative min-h-screen bg-matte-black text-cream overflow-x-hidden selection:bg-gold-accent selection:text-matte-black">
          
          {/* Custom magnetic spring cursor */}
          <CustomCursor />

          {/* Sticky transparent blur navbar */}
          <Navbar />

          {/* Core Cinematic Sections */}
          <main>
            <Hero />
            <About />
            <Menu />
            <Experience />
            <Gallery />
            <Reviews />
            <VisitUs />
            <Instagram />
          </main>

          {/* Minimal footer layout */}
          <Footer />

          {/* Glowing WhatsApp Float action button */}
          <WhatsAppFAB />
        </div>
      )}
    </>
  );
}
