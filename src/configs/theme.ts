import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "#000",
        color: "#fff",
      },
      html: {
        bg: "#000",
      },
    },
  },
});

export default theme;
