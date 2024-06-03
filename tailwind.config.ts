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
        'font-color': '#022A43',
        'font-light-color': '#758fa6',
        'background': '#F1F1F1',
        'border-color': '#CCD4D9',
      },
      fontSize: {
        small: '1rem'
      }
    },
  },
  plugins: [],
};
export default config;
