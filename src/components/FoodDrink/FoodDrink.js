import React from "react";

import { Box, Grid, Container } from "@mui/material";

import EmojiTypography from "../EmojiTypography/EmojiTypography.js";

function FoodDrink() {
  return (
    <Container>
      {/* Heading/Introduction */}
      <Box sx={{ py: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2} justifyContent="center">
          {/* Bio */}
          <Grid item xs={12} sm={6}>
            {/* Greeting */}
            <Box sx={{ pl: { xs: 0, sm: 3 } }}>
              <EmojiTypography
                name="wrench"
                text="under construction..."
                width={32}
                variant="h4"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default FoodDrink;
