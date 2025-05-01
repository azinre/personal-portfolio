/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core colors
        'ivory': '#E4E4DE',      // Ethereal ivory
        'noir': '#1B1B1B',       // Timeless noir
        'sage': '#C4C5BA',       // Sophisticated sage
        'moss': '#595F39',       // Muted moss
        
        // Functional colors
        'background': '#E4E4DE',  // Ethereal ivory
        'text': '#1B1B1B',       // Timeless noir
        'accent': '#C4C5BA',     // Sophisticated sage
        'hover': '#595F39',      // Muted moss
        
        // States
        'disabled': 'rgba(196, 197, 186, 0.5)',
        'overlay': 'rgba(27, 27, 27, 0.7)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'heading-1': '2.5rem',
        'heading-2': '2rem',
        'heading-3': '1.5rem',
        'body': '1rem',
        'small': '0.875rem',
      },
      boxShadow: {
        'hover': '0 10px 25px -5px rgba(27, 27, 27, 0.1), 0 10px 10px -5px rgba(27, 27, 27, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'scale-up': 'scaleUp 0.3s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 