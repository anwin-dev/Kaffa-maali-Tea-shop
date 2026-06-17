import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { IMAGES } from "../assets/images";

// Swiper styles imports
import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    name: "Adhil K.",
    role: "Empire College Student",
    quote: "The rooftop evening atmosphere here is absolutely unmatched. The warm bulbs and cool sunset breeze make it the ultimate place to relax after college. The Amber Spiced Tea is spectacular!",
    rating: 5,
    avatar: IMAGES.reviews[0],
  },
  {
    name: "Sreya P.",
    role: "Local Vlogger",
    quote: "Kaffa Maali has redefined the Kuttippuram late-night hangout experience. Highly aesthetic dark decor, exceptional hospitality, and specialty brews that feel premium. The 1:00 AM closing is a lifesaver.",
    rating: 5,
    avatar: IMAGES.reviews[1],
  },
  {
    name: "Fahad R.",
    role: "Regular Guest",
    quote: "Their Banana Fritters & vanilla scoop paired with hot Saffron Masala Chai is pure bliss. Sitting on the cozy rooftop deck with soft acoustic background chords is my absolute favorite weekly ritual.",
    rating: 5,
    avatar: IMAGES.reviews[2],
  },
];

export default function Reviews() {
  return (
    <section 
      id="reviews" 
      className="relative w-full py-24 md:py-32 bg-matte-black overflow-hidden px-6 md:px-12"
    >
      {/* Dynamic background layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full bg-espresso-dark/20 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle font-sans">Guest Notes</span>
          <h2 className="section-title mb-6 font-serif">
            Loved By <span className="text-gradient-gold italic">Locals</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-cream/60 max-w-md mx-auto font-light">
            Read what our wonderful sunset chasers and late-night gatherers have to say about the vibe.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="pb-16"
        >
          {TESTIMONIALS.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="glass-card p-8 md:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden select-none border border-gold-soft/5">
                
                {/* Gold soft decorative quotation mark */}
                <FaQuoteLeft className="text-5xl text-gold-accent/10 absolute top-8 left-8" />

                {/* Rating stars */}
                <div className="flex items-center space-x-1.5 mb-6 text-gold-accent">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm shadow-gold-glow" />
                  ))}
                </div>

                {/* Quote Paragraph */}
                <p className="font-serif text-base md:text-xl text-cream/90 leading-relaxed italic max-w-2xl mb-8 font-light select-all">
                  "{review.quote}"
                </p>

                {/* Reviewer Meta Grid */}
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-soft/20 shadow-md">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="block font-serif text-base text-cream font-medium tracking-wide">
                      {review.name}
                    </span>
                    <span className="block font-sans text-[10px] uppercase tracking-widest text-gold-soft/60 mt-0.5">
                      {review.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
