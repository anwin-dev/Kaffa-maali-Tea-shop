/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#090909',
        'charcoal': '#121212',
        'charcoal-light': '#1a1a1a',
        'espresso-dark': '#150d0c',
        'espresso-medium': '#1f1412',
        'espresso-light': '#2d1b18',
        'warm-beige': '#dfd5c6',
        'cream': '#fdfbf7',
        'gold-accent': '#d4af37',
        'gold-soft': '#c5a880',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.2)',
        'gold-glow-lg': '0 0 40px 0px rgba(212, 175, 55, 0.3)',
        'coffee-glow': '0 0 30px -5px rgba(45, 27, 24, 0.4)',
        'glass-white': '0 8px 32px 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'steam': 'steam 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(1.05)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: 0 },
          '15%': { opacity: 0.5 },
          '50%': { transform: 'translateY(-20px) scaleX(1.1)', opacity: 0.2 },
          '100%': { transform: 'translateY(-40px) scaleX(1.3)', opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
