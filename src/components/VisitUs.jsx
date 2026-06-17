import { motion } from "framer-motion";
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function VisitUs() {
  // Pre-configured WhatsApp text and map embed
  const phoneNumber = "919000000000";
  const messageText = encodeURIComponent(
    "Hey Kaffa Maali! I'd like to book/reserve a glowing corner table for tonight."
  );
  const waReserveUrl = `https://wa.me/${phoneNumber}?text=${messageText}`;

  // Authentic coordinate search for Moodal, Kuttippuram, Kerala (Empire College area)
  const mapEmbedUrl = 
    "https://maps.google.com/maps?q=Moodal,%20Kuttippuram,%20Kerala,%20Empire%20College&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section 
      id="visit" 
      className="relative w-full py-24 md:py-32 bg-charcoal overflow-hidden px-6 md:px-12"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 right-[-10%] w-[35vw] h-[35vw] rounded-full bg-espresso-light/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-gold-accent/3 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Side: Map Container */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full h-[450px] bg-charcoal-light shadow-2xl border border-gold-soft/5 group overflow-hidden">
              {/* Premium Gold Frame */}
              <div className="absolute inset-0 border border-gold-soft/10 group-hover:border-gold-accent/30 transition-colors duration-500 z-10 pointer-events-none" />

              {/* Real dark iframe map */}
              <iframe
                title="Kaffa Maali Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(85%) contrast(95%)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right Side: Details & Contact Grid */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="section-subtitle">Find the Vibe</span>
            <h2 className="section-title mb-8 font-serif">
              Visit The <span className="text-gradient-gold italic">Cafe</span>
            </h2>

            <div className="space-y-8 font-sans font-light">
              
              {/* Location Block */}
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-gold-accent/5 border border-gold-accent/20 text-gold-accent mt-1">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-cream tracking-wide mb-1">
                    Address
                  </h3>
                  <p className="text-sm text-cream/70 leading-relaxed">
                    Near Empire College, Moodal,<br />
                    Kuttippuram, Kerala 679571
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-gold-accent/5 border border-gold-accent/20 text-gold-accent mt-1">
                  <HiOutlineClock className="text-xl" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-cream tracking-wide mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-cream/70 leading-relaxed">
                    Open Daily: <span className="text-gold-soft font-semibold">2:30 PM - 1:00 AM</span>
                  </p>
                  <span className="text-[10px] uppercase text-gold-soft/50 font-semibold mt-1 block">
                    Sunset & Late-Night Hangouts
                  </span>
                </div>
              </div>

              {/* Contact Block */}
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-gold-accent/5 border border-gold-accent/20 text-gold-accent mt-1">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-cream tracking-wide mb-1">
                    Contact Us
                  </h3>
                  <p className="text-sm text-cream/70">
                    Phone: <span className="text-cream">+91 90000 00000</span>
                  </p>
                  <p className="text-sm text-cream/70 mt-1">
                    Email: <span className="text-cream">hello@kaffamaali.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Premium CTA Reservation Button */}
            <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={waReserveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-3 text-center"
              >
                <FaWhatsapp className="text-base" />
                Reserve Table
              </a>
              <a
                href="https://maps.google.com/?q=Moodal,%20Kuttippuram,%20Kerala,%20Empire%20College"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
