import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #000000, #FFD700)', // Black and golden yellow gradient
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, #000000, #FFD700)', // Black and golden yellow gradient
      },
    },
  },
  plugins: [],
};

export default config;
