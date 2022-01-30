import React from "react";
import "./App.css";

import { Container } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './Routing.js';

function App() {
  return (
    <Container maxWidth="md">
      <Router><Routing /></Router>
    </Container>
  );
}

export default App;
