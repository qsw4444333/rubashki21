/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/views/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F8383",
        "primary-darker": "#004747",
        "primary-darker-xl": "#003131",
        black: "#0F0F0F",
        "primary-grey": "#AAAAAA",
        "black-700": "#0F0F0F90",
        "primary-lighter": "#2DA9A9",
      },
      backgroundColor: {
        primary: "#1F8383",
        "primary-darker": "#004747",
        "primary-darker-xl": "#003131",
        black: "#0F0F0F",
        "black-500": "rgb(15, 15, 15, .90)",
        "primary-lighter": "#2DA9A9",
      },
      boxShadow: {
        primary: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
        "primary-xl": "0px 4px 8px 2px rgba(0, 0, 0, 0.25);",
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
      },
      fill: {
        primary: "#1F8383",
        "default-darker": "#EEEEEE",
      },
      boxShadowColor: {
        primary: "rgba(0, 0, 0, 0.25)",
        "primary-xl": "rgba(0, 0, 0, 0.35)",
      },
      width: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};
