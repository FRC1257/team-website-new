const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        sans: "Poppins",
        heading: "Poppins",
        body: "Poppins",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        text: {
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          950: "#0d0d0d",
          DEFAULT: "#ffffff",
        },
        background: {
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          950: "#0d0d0d",
          DEFAULT: "#262626",
        },
        primary: {
          50: "#effde8",
          100: "#defbd0",
          200: "#bef6a2",
          300: "#9df273",
          400: "#7dee44",
          500: "#5ce916",
          600: "#4abb11",
          700: "#378c0d",
          800: "#255d09",
          900: "#122f04",
          950: "#091702",
          DEFAULT: "#5ae515",
        },
        secondary: {
          50: "#fee7fb",
          100: "#fccff8",
          200: "#fa9ef1",
          300: "#f76eea",
          400: "#f53de2",
          500: "#f20ddb",
          600: "#c20aaf",
          700: "#910884",
          800: "#610558",
          900: "#30032c",
          950: "#180116",
          DEFAULT: "#f438e1",
        },
        accent: {
          50: "#f3ffe5",
          100: "#e7ffcc",
          200: "#cfff99",
          300: "#b8ff66",
          400: "#a0ff33",
          500: "#88ff00",
          600: "#6dcc00",
          700: "#529900",
          800: "#366600",
          900: "#1b3300",
          950: "#0e1a00",
          DEFAULT: "#f3ffe5",
        },
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}