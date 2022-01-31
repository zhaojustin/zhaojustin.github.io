import React from "react";

import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";

function FoodDrink() {
  return (
    <Container>
      {/* Heading/Introduction */}
      <Box sx={{ py: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2}>
          {/* Image of Me */}
          <Grid item xs={12} sm={6}>
            <Card></Card>
          </Grid>
          {/* Bio */}
          <Grid item xs={12} sm={6}>
            {/* Greeting */}
            <Box sx={{ pl: { xs: 0, sm: 3 } }}>
              <Typography variant="h4"> FoodDrink</Typography>
              <Typography variant="h3">I'm Justin</Typography>
              {/* Facts */}
              <Box sx={{ py: { xs: 2, sm: 4 } }}>
                <Typography variant="p" component="p">
                  NYU Stern School of Business
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default FoodDrink;
