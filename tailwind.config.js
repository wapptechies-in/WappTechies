/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FFF7ED',
          50: '#FFFAF5',
          100: '#FFF7ED',
          200: '#FDEED8',
          300: '#FCD8B0',
        },
        electric: {
          DEFAULT: '#155EEF',
          dark: '#1747B8',
          light: '#387CF8',
          subtle: '#DCEBFF',
        },
        ink: {
          DEFAULT: '#111827',
          deep: '#0B1120',
          dark: '#0F172A',
          muted: '#626B7A',
        },
        coral: {
          DEFAULT: '#FF6848',
          dark: '#E54C2A',
          light: '#FF886E',
          soft: '#FFE7E2',
        },
        mint: {
          DEFAULT: '#A7F3D0',
          dark: '#059669',
          light: '#D1FAE5',
        },
        lavender: {
          DEFAULT: '#C4B5FD',
          dark: '#7C3AED',
          light: '#EDE9FE',
        },
        borderLight: '#E9E5DF',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'float': '0 20px 45px -10px rgba(17, 24, 39, 0.08), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px rgba(17, 24, 39, 0.05)',
        'glow-blue': '0 0 35px rgba(21, 94, 239, 0.35)',
        'glow-coral': '0 0 35px rgba(255, 104, 72, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-medium': 'floatMed 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatMed: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}

