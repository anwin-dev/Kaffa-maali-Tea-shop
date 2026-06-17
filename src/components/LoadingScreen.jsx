import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fast, fluid progression matching high-end site animations
    const duration = 1800; // 1.8 seconds
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 400); // Small pause at 100% for smooth visuals
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-matte-black z-[99999] flex flex-col items-center justify-center text-center px-4"
          exit={{ 
            y: "-100%", 
            opacity: 0,
            transition: { 
              duration: 0.8, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
        >
          {/* Ambient Glow Orb */}
          <div className="absolute w-[40vw] h-[40vw] rounded-full bg-espresso-medium/20 blur-[120px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-subtle" />

          <div className="relative z-10 max-w-md w-full">
            {/* Elegant Cinematic Brand Entry */}
            <motion.h1
              className="font-serif text-5xl md:text-6xl tracking-[0.25em] text-gradient-gold font-bold mb-2 select-none"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              KAFFA MAALI
            </motion.h1>

            {/* Tagline Reveal */}
            <motion.p
              className="font-sans text-xs uppercase tracking-[0.4em] text-gold-soft font-medium mb-12 select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              More Than A Cafe. A Mood.
            </motion.p>

            {/* Progress Bar Track */}
            <div className="relative w-full h-[2px] bg-charcoal-light overflow-hidden max-w-[280px] mx-auto">
              {/* Active Loading bar */}
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold-accent to-cream shadow-[0_0_8px_#d4af37]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.span
              className="block mt-3 text-[10px] uppercase font-semibold tracking-widest text-gold-soft/50 font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
            >
              Crafting Vibe — {Math.round(progress)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
