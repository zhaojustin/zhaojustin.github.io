import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontFamily: "Montserrat",
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "Montserrat",
      fontWeight: 300,
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
