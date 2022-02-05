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

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Gallery from "./Gallery.js";

import IconTypography from "../EmojiTypography/IconTypography.js";

import InstagramIcon from "@mui/icons-material/Instagram";

function Photography() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fade in={true}>
      <Container maxWidth="lg">
        <Container maxWidth="md">
          {/* Heading/Introduction */}
          <Box sx={{ py: { xs: 2, sm: 4 } }}>
            <Grid container spacing={2}>
              {/* Image of Me */}
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="260"
                    image={require("./img/camera-min.jpg")}
                    alt="Camera"
                  />
                </Card>
              </Grid>
              {/* Bio */}
              <Grid item xs={12} sm={6}>
                {/* Greeting */}
                <Box sx={{ pl: { xs: 0, sm: 3 } }}>
                  <Typography variant="h3" component="h3">
                    Photos
                  </Typography>
                  <br></br>
                  <Link
                    href="https://www.instagram.com/zaho.jpeg/"
                    underline="hover"
                  >
                    <IconTypography
                      variant="p"
                      text="@zaho.jpeg"
                      icon={<InstagramIcon sx={{ color: "#C13584" }} />}
                    />{" "}
                  </Link>
                  {/* Facts */}
                  <Box sx={{ py: { xs: 2, sm: 4 } }}>
                    <Typography variant="p" component="p">
                      Starting around fall 2020, I began taking photos for fun.
                    </Typography>
                    <br></br>
                    <Typography variant="p" component="p">
                      Here are some of my favorites:
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* Image Gallery */}
        <Box sx={{ typography: "p", padding: 0 }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="new york city" value="1" />
                <Tab label="california" value="2" />
                <Tab label="hawaii" value="3" />
                <Tab label="friends" value="4" />
                <Tab label="film" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Gallery album="nyc" />
            </TabPanel>
            <TabPanel value="2">
              <Gallery album="cali" />
            </TabPanel>
            <TabPanel value="3">
              <Gallery album="hawaii" />
            </TabPanel>
            <TabPanel value="4">
              <Gallery album="friends" />
            </TabPanel>
            <TabPanel value="5">
              <Gallery album="film" />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </Fade>
  );
}

export default Photography;
