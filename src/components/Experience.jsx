import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { IMAGES } from "../assets/images";

const EXPERIENCE_SLIDES = [
  {
    id: 1,
    title: "Twilight Serenade",
    tagline: "Sunset Vibe",
    description: "Catch the deep-gold Malabar horizon from our open-air rooftop as twilight colors paint the sky, providing a cozy escape after college.",
    image: IMAGES.experience.sunset,
    time: "4:00 PM - 6:30 PM",
  },
  {
    id: 2,
    title: "Midnight Whispers",
    tagline: "Late-Night Vibe",
    description: "Open until 1:00 AM. Ambient filament bulbs, comfortable seating, soft music, and fresh steam coffee for late-night dreamers.",
    image: IMAGES.experience.night,
    time: "9:00 PM - 1:00 AM",
  },
  {
    id: 3,
    title: "Acoustic Gatherings",
    tagline: "Social Vibe",
    description: "Laugh with friends, share gourmet fusion platters, and enjoy live acoustic chill chords echoing under a starry velvet sky.",
    image: IMAGES.experience.acoustic,
    time: "Weekly Specials",
  },
  {
    id: 4,
    title: "Monsoon Reveries",
    tagline: "Rainy Vibe",
    description: "Watch the spectacular Kerala monsoons sweep across Kuttippuram while cocooned under our transparent glass rain canopies with hot tea.",
    image: IMAGES.experience.rainy,
    time: "Seasonal Magic",
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = 360; // Approximate card width + gap
      const newScrollLeft = 
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Recalculate indicator position
      setTimeout(() => {
        const totalScrollable = container.scrollWidth - container.clientWidth;
        setScrollProgress(totalScrollable > 0 ? container.scrollLeft / totalScrollable : 0);
      }, 300);
    }
  };

  return (
    <section 
      id="experience" 
      className="relative w-full py-24 md:py-32 bg-matte-black overflow-hidden px-6 md:px-12"
    >
      {/* Background aesthetics */}
      <div className="absolute top-1/4 left-[-10%] w-[35vw] h-[35vw] rounded-full bg-espresso-medium/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[30%] w-[45vw] h-[45vw] rounded-full bg-gold-accent/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="section-subtitle">Deep Atmosphere</span>
            <h2 className="section-title font-serif">
              The Kaffa Maali <span className="text-gradient-gold italic">Experience</span>
            </h2>
          </div>
          
          {/* Custom Slider Navigation buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 border border-cream/15 text-cream hover:text-gold-accent hover:border-gold-accent transition-luxury focus:outline-none"
              aria-label="Scroll left"
            >
              <HiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 border border-cream/15 text-cream hover:text-gold-accent hover:border-gold-accent transition-luxury focus:outline-none"
              aria-label="Scroll right"
            >
              <HiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Horizontal Card Slider container */}
        <div
          ref={containerRef}
          className="flex space-x-8 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {EXPERIENCE_SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-[290px] sm:w-[350px] snap-start"
            >
              <div className="glass-card flex flex-col h-[520px] overflow-hidden group select-none relative">
                
                {/* Image Section with parallax scaling */}
                <div className="relative h-[240px] w-full overflow-hidden bg-charcoal-light">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent z-10 pointer-events-none" />
                  
                  {/* Absolute slide header labels */}
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-semibold bg-matte-black/60 py-1 px-3.5 backdrop-blur-md">
                      {slide.tagline}
                    </span>
                  </div>

                  <motion.div
                    className="w-full h-full bg-cover bg-center transition-all duration-1000"
                    style={{ backgroundImage: `url(${slide.image})` }}
                    whileHover={{ scale: 1.08 }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Time Label */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                      <span className="font-sans text-[9px] uppercase tracking-widest text-gold-soft font-semibold">
                        {slide.time}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-cream font-medium tracking-wide mb-4 group-hover:text-gold-soft transition-colors duration-500">
                      {slide.title}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-cream/60 leading-relaxed font-light">
                      {slide.description}
                    </p>
                  </div>

                  {/* Decorative slide number indicator */}
                  <div className="flex items-center justify-between border-t border-cream/5 pt-4">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold-soft/30 font-semibold">
                      Explore Vibe
                    </span>
                    <span className="font-serif text-2xl text-cream/10 font-bold tracking-widest group-hover:text-gold-accent/20 transition-colors duration-500">
                      0{slide.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress track indicator */}
        <div className="w-full h-[1px] bg-cream/10 mt-8 relative max-w-sm mx-auto">
          <div 
            className="absolute top-0 h-full bg-gradient-to-r from-gold-accent to-gold-soft transition-all duration-300 shadow-[0_0_4px_#d4af37]"
            style={{ 
              width: "35%", 
              left: `${scrollProgress * 65}%`
            }}
          />
        </div>
      </div>
    </section>
  );
}
