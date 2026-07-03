import { motion } from "framer-motion";
import { IMAGES } from "../assets/images";
import bgImageKaffaMaali from "../assets/bg-kaffa-maali-2.png"


export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Stagger configurations for elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 2.0, // Delay to let Loading screen transition finish beautifully
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden bg-matte-black flex items-center justify-center px-6"
    >
      {/* Cinematic Background Image with continuous slow zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${bgImageKaffaMaali})` }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 0.4 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
      />

      {/* Dark vignette overlays for ultimate premium readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-matte-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Ambient glowing warm orbs */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-espresso-medium/20 blur-[130px] animate-pulse-subtle pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-gold-accent/5 blur-[120px] animate-float-slow pointer-events-none" />

      {/* Floating Coffee Steam Particles (CSS-backed lightweight elements) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10 opacity-30">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-[-10%] w-[1.5px] bg-gradient-to-t from-gold-soft/20 via-cream/10 to-transparent animate-steam"
            style={{
              left: `${15 + i * 15}%`,
              height: `${250 + i * 80}px`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${7 + i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content wrapper */}
      <motion.div
        className="relative z-20 text-center max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Brand Label */}
        <motion.span
          className="block font-sans text-xs md:text-sm uppercase tracking-[0.45em] text-gold-soft font-semibold mb-6 select-none"
          variants={itemVariants}
        >
          KAFFA MAALI • THE ROOFTOP GETAWAY
        </motion.span>

        {/* Big Serif Heading */}
        <motion.h2
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.15] text-cream mb-8 select-none"
          variants={itemVariants}
        >
          More Than <br className="md:hidden" />
          A Cafe. <br />
          <span className="text-gradient-gold font-serif italic select-none">A Mood.</span>
        </motion.h2>

        {/* Small cinematic details description */}
        <motion.p
          className="font-sans text-sm md:text-lg text-cream/75 max-w-xl mx-auto mb-10 leading-relaxed font-light select-none"
          variants={itemVariants}
        >
          Escape into a cozy sanctuary of twilight skies, steaming artisanal brews, and late-night acoustic notes nestled in Kuttippuram, Kerala.
        </motion.p>

        {/* Actions grid */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <a
            href="#menu"
            onClick={(e) => handleScrollTo(e, "#menu")}
            className="btn-gold w-full sm:w-auto"
          >
            Explore Menu
          </a>
          <a
            href="#visit"
            onClick={(e) => handleScrollTo(e, "#visit")}
            className="btn-outline w-full sm:w-auto"
          >
            Visit Cafe
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom sliding scroll-hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none select-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-soft/50 font-semibold mb-2">
          Scroll to discover
        </span>
        {/* Sleek scroll line */}
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-gold-soft/50 to-transparent relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gold-accent"
            animate={{ 
              top: ["-50%", "100%"] 
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
