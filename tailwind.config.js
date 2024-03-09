/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      adelia: ["var(--font-adelia)"],
      aston: ["var(--font-aston)"],
      newyork: ["var(--font-newyork)"],
    },
    extend: {
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1.10)" },
          "50%": { transform: "scale(1)" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1.15) rotate(-4deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
      },
      animation: {
        scale: "scale 2s ease-in-out infinite",
        "zoom-out": "zoom-out 8s ease-in-out",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
