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
      colors:{
        gold:"linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);"
      }
    },
  },
  plugins: [],
};

export default config;
