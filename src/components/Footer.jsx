import { FaInstagram, FaWhatsapp, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
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

  return (
    <footer className="relative w-full bg-matte-black border-t border-cream/5 pt-20 pb-10 px-6 md:px-12 overflow-hidden">
      
      {/* Subtle bottom glows */}
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-full bg-espresso-dark/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[25vw] h-[25vw] rounded-full bg-gold-accent/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5">
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-gradient-gold block mb-6">
              KAFFA MAALI
            </span>
            <p className="font-sans font-light text-xs sm:text-sm text-cream/50 leading-relaxed max-w-sm mb-6">
              A premium sunset and late-night open-air evening cafe in Kuttippuram, Kerala. We combine artisan brews, spiced teas, fusion bites, and cozy acoustic spaces.
            </p>
            
            {/* Social icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/kaffa_maali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:text-gold-accent hover:border-gold-accent transition-colors duration-300"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:text-gold-accent hover:border-gold-accent transition-colors duration-300"
                aria-label="WhatsApp Contact"
              >
                <FaWhatsapp className="text-sm" />
              </a>
              <a
                href="https://maps.google.com/?q=Moodal,%20Kuttippuram,%20Kerala,%20Empire%20College"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:text-gold-accent hover:border-gold-accent transition-colors duration-300"
                aria-label="Google Maps Location"
              >
                <FaMapMarkerAlt className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-cream uppercase mb-6">
              Sitemap
            </h4>
            <ul className="space-y-3 font-sans text-xs font-light text-cream/60">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleScrollTo(e, "#home")}
                  className="hover:text-gold-accent transition-colors"
                >
                  Home / Entrance
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScrollTo(e, "#about")}
                  className="hover:text-gold-accent transition-colors"
                >
                  Our Brand Story
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={(e) => handleScrollTo(e, "#menu")}
                  className="hover:text-gold-accent transition-colors"
                >
                  Signature Menu
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  onClick={(e) => handleScrollTo(e, "#experience")}
                  className="hover:text-gold-accent transition-colors"
                >
                  Cozy Experiences
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => handleScrollTo(e, "#gallery")}
                  className="hover:text-gold-accent transition-colors"
                >
                  Vibe Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Local Contacts */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-cream uppercase mb-6">
              Location Hook
            </h4>
            <ul className="space-y-4 font-sans text-xs font-light text-cream/60">
              <li className="flex items-start space-x-3">
                <span className="text-gold-accent font-semibold mt-0.5">•</span>
                <span>
                  Near Empire College, Moodal, <br />
                  Kuttippuram, Kerala 679571
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold-accent font-semibold mt-0.5">•</span>
                <span>
                  Opening Hours: <br />
                  <strong className="text-cream font-medium">2:30 PM - 1:00 AM</strong> Daily
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold-accent font-semibold mt-0.5">•</span>
                <span>
                  Phone: <strong className="text-cream font-medium">+91 98468 31119</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="border-t border-cream/5 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 font-sans text-[10px] text-cream/40 uppercase tracking-widest font-semibold">
          <span>
            © {new Date().getFullYear()} KAFFA MAALI. All Rights Reserved.
          </span>
          <span className="flex items-center gap-1.5 font-light normal-case tracking-normal text-cream/30">
            Handcrafted with <span className="text-gold-accent">♥</span> for late-night coffee culture.
          </span>
        </div>
      </div>
    </footer>
  );
}
