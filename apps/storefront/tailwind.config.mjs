/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primary-primary-900": "#021736",
        "neutral-gray-cbcbcb": "#cbcbcb",
        "primary-primary-50": "#aecdfb",
        "neutral-gray-f9f9f9": "#f9f9f9",
        black: "#0c0b0b",
        "neutral-gray-9e9e9e": "#9e9e9e",
        "neutral-gray-717171": "#717171",
        secondary: "#f45e0c",
        darkslategray: "#223949",
        tomato: "#ff6951",
        "neutral-gray-b4b4b4": "#b4b4b4",
        "primary-primary-500": "#063a88",
        "primary-secondary-secondary-100": "#fddbc9",
        "neutral-gray-505050": "#505050",
        "neutral-gray-444444": "#444",
        crimson: "#d71e1e",
        gray: {
          "100": "#8b8b8b",
          "200": "#222",
          "300": "#101010",
          "400": "#0a0a0a",
          "500": "rgba(255, 255, 255, 0.3)",
          "600": "rgba(255, 255, 255, 0.6)",
        },
        steelblue: "#005690",
        primary: "#0c68f4",
        sandybrown: "#fcc870",
        "neutral-gray-2d2d2d": "#2d2d2d",
        lightsteelblue: {
          "100": "#bcd7ff",
          "200": "#96b9d7",
        },
        lavender: "#eadee9",
        floralwhite: "#f8f8ee",
        dimgray: "#51504c",
        "primary-primary-700": "#042352",
        "gradient-linear-stroke-bottom": "rgba(12, 104, 244, 0.3)",
      },
      spacing: {},
      fontFamily: {
        "web-button-lg": "Inter",
      },
      borderRadius: {
        "29xl": "48px",
        "11xs-2": "1.2px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      lg: "18px",
      xl: "20px",
      sm: "14px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "5xl": "24px",
      "25xl": "44px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  }
}
