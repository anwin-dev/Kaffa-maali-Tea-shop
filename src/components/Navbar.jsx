import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Signature Menu", href: "#menu" },
  { name: "Experience", href: "#experience" },
  { name: "Vibe Gallery", href: "#gallery" },
  { name: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Detect scroll offset for sticky background transparency transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Proactive check of viewport intersection to update active menu items
      const sections = NAV_LINKS.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href, name) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(name);
    
    const targetSection = document.querySelector(href);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Offset for navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? "glass-nav py-4 shadow-lg" : "bg-transparent py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo brand wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home", "Home")}
            className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-gradient-gold hover:opacity-90 transition-opacity"
          >
            KAFFA MAALI
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.name)}
                className={`relative font-sans text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 py-1.5 ${
                  activeSection === link.name ? "text-gold-accent" : "text-cream/70 hover:text-cream"
                }`}
              >
                {link.name}
                {/* Slim gold active underline */}
                {activeSection === link.name && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gold-accent to-gold-soft shadow-[0_0_6px_#d4af37]"
                    layoutId="activeUnderline"
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA/Quick Reservation for Desktop */}
          <div className="hidden lg:block">
            <a
              href="#visit"
              onClick={(e) => handleLinkClick(e, "#visit", "Visit Us")}
              className="btn-outline px-6 py-2.5 text-[10px] tracking-[0.2em] border-gold-soft/30 text-gold-soft hover:bg-gold-accent hover:text-matte-black hover:border-gold-accent"
            >
              Reserve Table
            </a>
          </div>

          {/* Hamburger Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-2xl text-cream focus:outline-none focus:text-gold-accent transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu Overlays */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-matte-black/98 lg:hidden flex flex-col justify-center px-8 md:px-16"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            {/* Ambient gold glow in mobile menu */}
            <div className="absolute w-[80vw] h-[80vw] rounded-full bg-espresso-medium/10 blur-[100px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="flex flex-col space-y-6 md:space-y-8 relative z-10">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.name)}
                  className={`font-serif text-3xl md:text-4xl tracking-wide transition-colors ${
                    activeSection === link.name ? "text-gold-accent" : "text-cream/50"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="mt-12 md:mt-16 border-t border-cream/10 pt-8 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="font-sans text-[10px] uppercase tracking-widest text-gold-soft/50 mb-3 font-semibold">
                Kuttippuram, Kerala
              </p>
              <a 
                href="https://wa.me/919000000000" 
                className="font-serif text-lg text-cream hover:text-gold-accent transition-colors"
              >
                +91 98468 31119
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
