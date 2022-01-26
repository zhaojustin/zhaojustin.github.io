import React from "react";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header/Header.js";
import "./App.css";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
