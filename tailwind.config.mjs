/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hina-blue': '#00d4ff',
        'hina-purple': '#9d00ff',
        'hina-dark': '#050505',
      },
      backgroundImage: {
        'hina-gradient': 'radial-gradient(circle at center, #1a0033 0%, #050505 100%)',
      },
    },
  },
  plugins: [],
};