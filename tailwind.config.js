/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    colors: {
      black: "#0A0E00",
      yellow: "#FFE20A",
    },
    screens: {
      sm: { max: "700px" },
      md: "700px",
      lg: "1024px",
      xl: "1280px",
    },
    },
  },
  plugins: [],
}
