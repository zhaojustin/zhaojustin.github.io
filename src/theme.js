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
      fontFamily: "Roboto",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "Roboto",
      fontWeight: 300,
    },
    p: {
      fontFamily: "Roboto Mono",
    },
    link: {
      fontFamily: "Roboto",
      fontWeight: 300,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
          textTransform: "lowercase",
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          margin: 0,
        },
      },
    },
  },
});

export default theme;
