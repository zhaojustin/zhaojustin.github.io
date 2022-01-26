import React from "react";

import { Box, Container, Typography } from "@mui/material";

import Navigation from "./Navigation.js";

function Header() {
  return (
    <Container>
      <Box sx={{ py: { xs: 2, sm: 4 } }}>
        <Navigation />
      </Box>
      <Box sx={{ py: { xs: 2, sm: 4 } }}>
        <Typography variant="h3">👋 Hello</Typography>
        <Typography variant="h2">I'm Justin</Typography>
      </Box>
    </Container>
  );
}

export default Header;
