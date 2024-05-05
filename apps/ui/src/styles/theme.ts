import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: "unset" } } },
  colors: {
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2c3748",
      800: "#1a202c",
      900: "#171923",
    },
    secondary: {
      50: "#fee6ec",
      100: "#fcb5c5",
      200: "#fa849f",
      300: "#f85378",
      400: "#f62252",
      500: "#f50a3f",
      600: "#dd0939",
      700: "#ac072c",
      800: "#7b051f",
      900: "#4a0313",
    },
  },
});

export default chakraTheme