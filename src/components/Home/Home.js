import React from "react";

import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";

import EmojiTypography from "../EmojiTypography/EmojiTypography.js";

function Home() {
  return (
    <Container>
      {/* Heading/Introduction */}
      <Box sx={{ py: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2}>
          {/* Image of Me */}
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={require("./img/profilepic.JPG")}
                alt="Profile Pic"
              />
            </Card>
          </Grid>
          {/* Bio */}
          <Grid item xs={12} sm={6}>
            {/* Greeting */}
            <Box sx={{ pl: { xs: 0, sm: 3 } }}>
              <Typography variant="h4"> Hello</Typography>
              <Typography variant="h3">I'm Justin</Typography>
              {/* Facts */}
              <Box sx={{ py: { xs: 2, sm: 4 } }}>
                <Typography variant="p" component="p">
                  NYU Stern School of Business
                </Typography>
                <EmojiTypography
                  name="house"
                  text="southern california"
                  width={28}
                  variant="p"
                />
                <Typography variant="p" component="p">
                  c/o 2024
                </Typography>
                <Typography variant="p" component="p"></Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
