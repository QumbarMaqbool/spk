import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1B2A4A', 900: '#121C33', 800: '#1B2A4A', 700: '#2A3D63' },
        gold: { DEFAULT: '#F5A623', 600: '#D88F18', 400: '#F7B954' },
        cream: { DEFAULT: '#F8F6F1', 200: '#EFEBE0' }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-tajawal)', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'diagonal-grid': "linear-gradient(135deg, rgba(245,166,35,0.04) 1px, transparent 1px), linear-gradient(45deg, rgba(245,166,35,0.04) 1px, transparent 1px)"
      },
      backgroundSize: { 'diagonal-grid': '40px 40px' },
      clipPath: {
        'diag-b': 'polygon(0 0, 100% 0, 100% 92%, 0 100%)',
        'diag-t': 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)'
      }
    }
  },
  plugins: []
};
export default config;
