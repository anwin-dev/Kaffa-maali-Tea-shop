import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFAB() {
  // Pre-configured Kaffa Maali number (Kuttippuram, Kerala local hook)
  // Customized with a pre-filled invitation text
  const phoneNumber = "919000000000"; // Placeholder, easily replaceable
  const preFilledText = encodeURIComponent(
    "Hey Kaffa Maali! I'd love to drop by tonight. Are you guys open?"
  );
  const waUrl = `https://wa.me/${phoneNumber}?text=${preFilledText}`;

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] focus:outline-none cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: 2 
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Connect with Kaffa Maali on WhatsApp"
    >
      {/* Dynamic continuous pulsing glow rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
      <span className="absolute inset-0 rounded-full border border-[#25D366]/60 animate-pulse-subtle pointer-events-none" />

      {/* Modern High-Quality WhatsApp Icon */}
      <FaWhatsapp className="text-3xl" />
    </motion.a>
  );
}
