import { motion } from "framer-motion";
import { IMAGES } from "../assets/images";

export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full py-24 md:py-32 bg-matte-black overflow-hidden px-6 md:px-12"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] rounded-full bg-espresso-dark/30 blur-[130px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-gold-accent/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        {/* Left Side: Content & Narrative */}
        <motion.div 
          className="lg:col-span-6 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">Our Story</span>
          <h2 className="section-title mb-8 font-serif">
            A Late-Night Oasis <br />
            For The Sunset <span className="text-gradient-gold italic">Chasers</span>
          </h2>
          
          <div className="space-y-6 text-cream/70 font-sans font-light text-sm md:text-base leading-relaxed">
            <p>
              Born in the vibrant hub of <strong className="text-gold-soft font-semibold">Moodal, Kuttippuram</strong>, just steps away from Empire College, <strong className="text-cream font-medium">Kaffa Maali</strong> was conceptualized as more than just a typical coffee shop. It is a mood, an evening sanctuary, and an open-air escape.
            </p>
            <p>
              Open daily from <strong className="text-gold-soft font-semibold">2:30 PM to 1:00 AM</strong>, we catch the very first warm orange brushstrokes of sunset and carry that energy deep into the peaceful quiet of the Malabar night. We believe that conversations flow better under twilight string lights and that every cup of tea holds a story waiting to be told.
            </p>
            <p>
              Whether you’re catching up with college friends, seeking a quiet glowing corner to write, or craving our local fusion snacks paired with amber spiced tea, Kaffa Maali is your home away from home. We brew with passion, serve with warmth, and hold space for your favorite late-night memories.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 mt-12 border-t border-cream/10 pt-8">
            <div>
              <span className="block font-serif text-3xl text-gold-accent font-bold">2:30 PM</span>
              <span className="block text-[9px] uppercase tracking-widest text-cream/50 mt-1 font-sans">
                Until 1:00 AM Daily
              </span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-gold-accent font-bold">100%</span>
              <span className="block text-[9px] uppercase tracking-widest text-cream/50 mt-1 font-sans">
                Artisan Blends
              </span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-gold-accent font-bold">Rooftop</span>
              <span className="block text-[9px] uppercase tracking-widest text-cream/50 mt-1 font-sans">
                Open-Air Vibe
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Immersive Narrative Photo Frame */}
        <motion.div 
          className="lg:col-span-6 flex justify-center lg:justify-end z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] bg-charcoal overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Soft gold border frame overlay */}
            <div className="absolute inset-0 border border-gold-soft/10 z-20 pointer-events-none group-hover:border-gold-accent/30 transition-colors duration-700" />
            
            {/* Ambient inner soft shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black/70 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Immersive photo asset */}
            <motion.div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${IMAGES.aboutVibe})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Float details indicator overlay */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center space-x-3 bg-matte-black/80 backdrop-blur-md border border-white/5 py-2 px-4 rounded-none">
              <div className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/90 font-medium">
                Kaffa Maali Twilight Corner
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
