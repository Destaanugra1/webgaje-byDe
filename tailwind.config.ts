const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    
    extend: {
      colors: {
        "brand-blue": "#2f80ed",
        "brand-red": "#e94560",
        "brand-green": "#2ecc71",
        "brand-yellow": "#f1c40f",
        "brand-purple": "#9b59b6",
        "brand-pink": "#e91e63",
        "brand-orange": "#f39c12",
        "brand-cyan": "#00bcd4",
        "brand-gray": "#7f8c8d",
        "blue-white": "#818cf8",
        "blue-black": "#17153B"
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}