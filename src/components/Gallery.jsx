import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiArrowLeft, HiArrowRight, HiOutlineEye } from "react-icons/hi";
import { IMAGES } from "../assets/images";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (idx) => {
    setSelectedImg(IMAGES.gallery[idx]);
    setCurrentIndex(idx);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const newIdx = currentIndex === 0 ? IMAGES.gallery.length - 1 : currentIndex - 1;
    setSelectedImg(IMAGES.gallery[newIdx]);
    setCurrentIndex(newIdx);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const newIdx = currentIndex === IMAGES.gallery.length - 1 ? 0 : currentIndex + 1;
    setSelectedImg(IMAGES.gallery[newIdx]);
    setCurrentIndex(newIdx);
  };

  return (
    <section 
      id="gallery" 
      className="relative w-full py-24 md:py-32 bg-charcoal overflow-hidden px-6 md:px-12"
    >
      {/* Background soft lighting glows */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] rounded-full bg-espresso-light/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-gold-accent/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header grid */}
        <div className="text-center mb-16">
          <span className="section-subtitle">Visual Story</span>
          <h2 className="section-title mb-6 font-serif">
            Cinematic <span className="text-gradient-gold italic">Gallery</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-cream/60 max-w-lg mx-auto font-light">
            A glimpse into the late-night tea culture, aesthetic spaces, and peaceful evening notes of Kaffa Maali.
          </p>
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMAGES.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              className={`relative cursor-pointer overflow-hidden group shadow-lg ${
                idx === 1 ? "lg:col-span-2 aspect-[16/10]" : "aspect-square"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              onClick={() => openLightbox(idx)}
            >
              {/* Gold borders */}
              <div className="absolute inset-0 border border-gold-soft/10 group-hover:border-gold-accent/30 transition-colors duration-500 z-20 pointer-events-none" />
              
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-matte-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col items-center justify-center pointer-events-none">
                <motion.div 
                  className="w-12 h-12 rounded-full border border-gold-accent/50 flex items-center justify-center text-gold-accent bg-gold-accent/5 shadow-gold-glow mb-3"
                  whileHover={{ scale: 1.1 }}
                >
                  <HiOutlineEye className="text-lg" />
                </motion.div>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-cream font-semibold">
                  View Vibe
                </span>
                <span className="font-sans text-[8px] uppercase tracking-widest text-gold-soft/50 mt-1">
                  @kaffa_maali
                </span>
              </div>

              {/* Cover visual with high-res zoom */}
              <motion.div
                className="w-full h-full bg-cover bg-center transition-all duration-[1200ms] ease-out"
                style={{ backgroundImage: `url(${img})` }}
                whileHover={{ scale: 1.08 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox full-screen custom Modal popup */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-matte-black/95 z-[9999] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            {/* Ambient Background Glow inside Lightbox */}
            <div className="absolute w-[60vw] h-[60vw] rounded-full bg-espresso-medium/20 blur-[130px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Close Button top right */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 z-[10000] text-cream/70 hover:text-gold-accent text-3xl focus:outline-none p-2 bg-charcoal/40 border border-white/5 backdrop-blur-md transition-colors"
              aria-label="Close Lightbox"
            >
              <HiX />
            </button>

            {/* Back Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-[10000] text-cream/70 hover:text-gold-accent text-3xl focus:outline-none p-3 bg-charcoal/40 border border-white/5 backdrop-blur-md transition-colors"
              aria-label="Previous Vibe"
            >
              <HiArrowLeft />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-[10000] text-cream/70 hover:text-gold-accent text-3xl focus:outline-none p-3 bg-charcoal/40 border border-white/5 backdrop-blur-md transition-colors"
              aria-label="Next Vibe"
            >
              <HiArrowRight />
            </button>

            {/* Interactive Image Frame */}
            <motion.div
              className="relative max-w-5xl max-h-[80vh] aspect-[4/3] bg-charcoal border border-gold-soft/10 shadow-2xl overflow-hidden select-none"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Stop bubbling up
            >
              <img
                src={selectedImg}
                alt="Kaffa Maali Vibe"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Bottom detail text inside Lightbox */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-matte-black/90 via-matte-black/40 to-transparent flex items-center justify-between border-t border-white/5">
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-gold-accent font-bold">
                    Twilight Moments
                  </span>
                  <p className="font-serif text-lg text-cream tracking-wide mt-1">
                    Evening Atmosphere at Kuttippuram
                  </p>
                </div>
                <span className="font-sans text-xs text-cream/50">
                  {currentIndex + 1} of {IMAGES.gallery.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
