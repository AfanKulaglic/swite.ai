import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FFFFFF', // Pure white for monochrome design
        brandHover: '#E5E5E5',
        black: '#0A0A0A',
        white: '#FFFFFF',
        accentBlue: '#FFFFFF', // Changed to white
        accentPurple: '#FFFFFF', // Changed to white
        muted: '#9CA3AF',
        mutedDark: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 20px -2px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
