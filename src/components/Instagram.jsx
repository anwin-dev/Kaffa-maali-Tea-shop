import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export default function Instagram() {
  const instagramUrl = "https://www.instagram.com/kaffa_maali";

  return (
    <section 
      id="instagram" 
      className="relative w-full py-20 bg-matte-black overflow-hidden px-6 text-center"
    >
      {/* Background soft glowing particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glowing Instagram Icon */}
          <motion.div 
            className="w-16 h-16 rounded-full border border-gold-soft/20 flex items-center justify-center text-gold-accent bg-gold-accent/5 shadow-gold-glow mb-6"
            whileHover={{ scale: 1.08 }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(212, 175, 55, 0.15)",
                "0 0 35px rgba(212, 175, 55, 0.3)",
                "0 0 20px rgba(212, 175, 55, 0.15)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaInstagram className="text-3xl" />
          </motion.div>

          <span className="font-sans text-xs uppercase tracking-[0.35em] text-gold-soft font-semibold mb-2">
            Join Our Feed
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl text-cream font-medium tracking-wide mb-6">
            Share The Sunset <span className="text-gradient-gold italic">Stories</span>
          </h2>

          <p className="font-sans text-sm text-cream/60 max-w-md mx-auto mb-10 leading-relaxed font-light">
            Tag us in your late-night gatherings, cozy study sessions, or sunset teas to get featured on our page.
          </p>

          {/* Followers metrics grid */}
          <div className="flex items-center justify-center gap-8 md:gap-12 mb-10 border-y border-cream/10 py-6 w-full max-w-lg">
            <div>
              <span className="block font-serif text-2xl text-cream font-semibold">10k+</span>
              <span className="block font-sans text-[8px] uppercase tracking-widest text-gold-soft/50 mt-0.5">
                Chasers Community
              </span>
            </div>
            <div className="w-[1px] h-8 bg-cream/10" />
            <div>
              <span className="block font-serif text-2xl text-cream font-semibold">@kaffa_maali</span>
              <span className="block font-sans text-[8px] uppercase tracking-widest text-gold-soft/50 mt-0.5">
                Official Handle
              </span>
            </div>
          </div>

          {/* CTA Link Follow */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-3 px-10 py-4 shadow-gold-glow hover:shadow-gold-glow-lg clickable"
          >
            <FaInstagram className="text-base" />
            Follow @kaffa_maali
          </a>
        </motion.div>
      </div>
    </section>
  );
}
