import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        blush: '#f9dce8',
        mist: '#e4f0ff',
        ink: '#2a3552',
        pastelBlue: '#cfe4ff',
        pastelPink: '#ffd6e7',
        softPurple: '#e7defe'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        fancy: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 12px 40px rgba(80, 112, 173, 0.12)'
      },
      backgroundImage: {
        shell: 'radial-gradient(circle at top left, rgba(255, 214, 231, 0.8), transparent 35%), radial-gradient(circle at top right, rgba(207, 228, 255, 0.9), transparent 40%), linear-gradient(180deg, #fefcff 0%, #f7fafe 100%)'
      }
    }
  },
  plugins: []
};

export default config;
