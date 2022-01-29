import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Roboto",
    },
    h2: {
      fontFamily: "Roboto",
    },
    h3: {
      fontFamily: "Roboto",
    },
    h4: {
      fontFamily: "Roboto",
    },
    p: {
      fontFamily: "Roboto Mono",
    },
  },
  components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: "15px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        },
      },
    },
  },
});

export default theme;
