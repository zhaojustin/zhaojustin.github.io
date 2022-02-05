import React from "react";
import Fade from "@mui/material/Fade";

import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  Link,
  CardMedia,
} from "@mui/material";

import CovidCard from "./Cards/CovidCard/CovidCard.js";
import BobaCard from "./Cards/BobaCard/BobaCard.js";
import DailyCard from "./Cards/DailyCard/DailyCard.js";
import WorkingCard from "./Cards/WorkingCard/WorkingCard.js";

import IconTypography from "../EmojiTypography/IconTypography.js";

import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  return (
    <Fade in={true}>
      <Container maxWidth="lg">
        {/* Heading/Introduction */}
        <Container maxWidth="md">
          <Box sx={{ py: { xs: 2, sm: 4 } }}>
            <Grid container spacing={2}>
              {/* Image of Me */}
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="260"
                    image={require("./img/pikachu-using-computer.jpeg")}
                    alt="Pikachu on the computer"
                  />
                </Card>
              </Grid>
              {/* Bio */}
              <Grid item xs={12} sm={6}>
                {/* Greeting */}
                <Box sx={{ pl: { xs: 0, sm: 3 } }}>
                  <Typography variant="h3" component="h3">
                    Projects
                  </Typography>
                  <br></br>
                  <Link href="https://github.com/zhaojustin" underline="hover">
                    <IconTypography
                      variant="p"
                      text="github.com/zhaojustin"
                      icon={<GitHubIcon sx={{ color: "#333" }} />}
                    />
                  </Link>
                  {/* Facts */}
                  <Box sx={{ py: { xs: 2, sm: 4 } }}>
                    <Typography variant="p" component="p">
                      I create projects for fun, but also to learn new
                      programming languages and libraries/frameworks.
                    </Typography>
                    <br></br>
                    <Typography variant="p" component="p">
                      Here is some of my work (all on Github):
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* Image Gallery */}
        <Box sx={{ py: { sm: 2, md: 6 } }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CovidCard />
            </Grid>
            <Grid item xs={4}>
              <BobaCard />
            </Grid>
            <Grid item xs={4}>
              <DailyCard />
            </Grid>
            <Grid item xs={4}>
              <WorkingCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fade>
  );
}

export default Projects;
