const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["General Sans", ...defaultTheme.fontFamily.sans],
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
};
