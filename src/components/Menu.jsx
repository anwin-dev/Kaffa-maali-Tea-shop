import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../assets/images";

const MENU_CATEGORIES = [
  { id: "brews", label: "Espresso & Brews" },
  { id: "teas", label: "Premium Teas & Coolers" },
  { id: "bites", label: "Malabar Fusion Bites" },
];

const MENU_ITEMS = {
  brews: [
    {
      name: "Artisan Latte Art",
      description: "Sleek double espresso pulled over rich steamed velvet milk.",
      price: "₹140",
      image: IMAGES.menu.coffee,
      hot: true,
      popular: true,
    },
    {
      name: "Double Shot Espresso",
      description: "Intense, dark, and highly robust single origin Arabica shot.",
      price: "₹110",
      image: IMAGES.menu.coffee,
      hot: true,
      popular: false,
    },
    {
      name: "Moody Cold Brew",
      description: "Artisan roasted blend slow-infused over 18 hours in cold glass.",
      price: "₹150",
      image: IMAGES.menu.coffee,
      hot: false,
      popular: true,
    },
    {
      name: "Kuttippuram Filter Drip",
      description: "Traditional double-filtered Malabar decoction sweetened with heavy cream.",
      price: "₹90",
      image: IMAGES.menu.coffee,
      hot: true,
      popular: false,
    },
  ],
  teas: [
    {
      name: "Amber Spiced Tea",
      description: "Authentic strong tea leaves brewed with cinnamon, crushed cardamom & ginger.",
      price: "₹60",
      image: IMAGES.menu.tea,
      hot: true,
      popular: true,
    },
    {
      name: "Sunset Crimson Cooler",
      description: "Layered organic hibiscus tea, passion fruit pulp, and cold mineral bubbles.",
      price: "₹130",
      image: IMAGES.menu.mocktail,
      hot: false,
      popular: true,
    },
    {
      name: "Emerald Mint Mojito",
      description: "Muddled local fresh mint, lime slices, brown sugar syrup, and soda.",
      price: "₹120",
      image: IMAGES.menu.mocktail,
      hot: false,
      popular: false,
    },
    {
      name: "Saffron Masala Chai",
      description: "Rich black CTC tea leaves boiled with fresh milk and organic saffron strands.",
      price: "₹80",
      image: IMAGES.menu.tea,
      hot: true,
      popular: false,
    },
  ],
  bites: [
    {
      name: "Malabar Mayo Sliders",
      description: "Two crispy chicken sliders topped with our signature hot-spiced local garlic mayo.",
      price: "₹180",
      image: IMAGES.menu.bites,
      hot: false,
      popular: true,
    },
    {
      name: "Banana Fritters & Cream",
      description: "Golden crispy sweet banana fritters paired with premium vanilla bean scoop.",
      price: "₹120",
      image: IMAGES.menu.bites,
      hot: true,
      popular: true,
    },
    {
      name: "Spiced Peri-Peri Platter",
      description: "Double crispy hand-cut potato wedges tossed in local volcanic spices.",
      price: "₹100",
      image: IMAGES.menu.bites,
      hot: true,
      popular: false,
    },
    {
      name: "Kaffa Triple Layer Sandwich",
      description: "Shredded butter chicken, melting mozzarella, and grilled sweet corn layers.",
      price: "₹160",
      image: IMAGES.menu.bites,
      hot: true,
      popular: false,
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("brews");

  // Grid entry animations
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      id="menu" 
      className="relative w-full py-24 md:py-32 bg-charcoal overflow-hidden px-6 md:px-12"
    >
      {/* Background glow graphics */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] rounded-full bg-espresso-light/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold-accent/4 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="section-subtitle">Exquisite Taste</span>
          <h2 className="section-title mb-6 font-serif">
            Signature <span className="text-gradient-gold italic">Offerings</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-cream/60 max-w-lg mx-auto font-light">
            Every drink is curated as an experience, and every dish is baked with rich, authentic local fusions.
          </p>
        </div>

        {/* Categories Tab selectors */}
        <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-16 overflow-x-auto pb-4 max-w-full no-scrollbar">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative py-3 px-6 md:px-8 font-sans text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-gold-accent"
                  : "text-cream/50 hover:text-cream"
              }`}
            >
              {category.label}
              
              {/* Gold sliding background slider tab link */}
              {activeCategory === category.id && (
                <motion.div
                  className="absolute inset-0 border border-gold-accent/20 bg-gold-accent/5 z-0"
                  layoutId="activeTabOutline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Cards Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10 relative"
          >
            {MENU_ITEMS[activeCategory].map((item, idx) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                className="glass-card flex flex-col h-full group"
              >
                {/* Image Section with hover-zoom zoom effect */}
                <div className="relative w-full aspect-[4/3] bg-charcoal-light overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Hot/Spiced Rising steam visual badge */}
                  {item.hot && (
                    <div className="absolute top-4 left-4 z-20 flex items-center space-x-1.5 bg-espresso-medium/80 border border-gold-soft/20 py-1 px-2.5 rounded-none shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                      <div className="steam-container w-2.5 h-2.5 flex items-center justify-center">
                        <span className="absolute w-[1.5px] h-3 bg-gold-accent/60 blur-[0.5px] animate-steam" style={{ animationDelay: "0s" }} />
                        <span className="absolute w-[1.5px] h-3 bg-gold-soft/60 blur-[0.5px] animate-steam" style={{ animationDelay: "1.2s", left: "6px" }} />
                      </div>
                      <span className="font-sans text-[8px] uppercase tracking-widest text-gold-accent font-semibold">
                        Fresh & Hot
                      </span>
                    </div>
                  )}

                  {/* Popular tag badge */}
                  {item.popular && (
                    <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-gold-accent to-gold-soft text-matte-black text-[8px] uppercase tracking-widest font-bold py-1 px-2.5 shadow-md">
                      BEST VIBE
                    </div>
                  )}

                  <motion.div
                    className="w-full h-full bg-cover bg-center transition-all duration-700"
                    style={{ backgroundImage: `url(${item.image})` }}
                    whileHover={{ scale: 1.1 }}
                  />
                </div>

                {/* Details Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-serif text-lg text-cream font-medium tracking-wide group-hover:text-gold-soft transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-sans text-sm font-semibold text-gold-accent whitespace-nowrap bg-gold-accent/10 px-2 py-0.5 border border-gold-accent/20">
                      {item.price}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-cream/60 leading-relaxed font-light flex-grow">
                    {item.description}
                  </p>

                  {/* Visual bottom connector details */}
                  <div className="mt-6 pt-4 border-t border-cream/5 flex items-center justify-between">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-gold-soft/40">
                      Crafted daily
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-soft/40 group-hover:bg-gold-accent transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
