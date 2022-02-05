import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Fade from "@mui/material/Fade";

import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  CardMedia,
  Link,
} from "@mui/material";

import EmojiTypography from "../EmojiTypography/EmojiTypography.js";
import IconTypography from "../EmojiTypography/IconTypography.js";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Home() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Fade in={true}>
      <Container maxWidth="md">
        {/* Heading/Introduction */}
        <Box sx={{ py: { xs: 2, sm: 4 } }}>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={{ xs: 4, sm: 5 }}
          >
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
                <EmojiTypography
                  name="waving-hand"
                  text="hello, i'm..."
                  width={32}
                  variant="h4"
                />
                <Typography variant="h3" component="h3">
                  Justin Zhao
                </Typography>
                {/* Facts */}
                <Box sx={{ pt: { xs: 3, sm: 5 } }}>
                  <EmojiTypography
                    name="open-book"
                    text="NYU Stern School of Business"
                    width={20}
                    variant="p"
                  />
                  <EmojiTypography
                    name="graduation-cap"
                    text="c/o 2024"
                    width={20}
                    variant="p"
                  />
                </Box>
                {/* Bio */}
                <Box sx={{ pt: { xs: 3, sm: 4 } }}>
                  <Typography variant="p" component="p">
                    majoring in <strong>finance {"&"} c.s.</strong>
                  </Typography>
                  <Typography variant="p" component="p">
                    calls <strong>southern california home</strong>
                  </Typography>
                  <Typography variant="p" component="p">
                    thinks <strong>photography is fun</strong>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Heading/Introduction */}
        <Box sx={{ py: { xs: 2, sm: 4 } }}>
          <Grid container justifyContent={matches ? "left" : "center"}>
            <Grid item>
              {/* Find Me */}
              <EmojiTypography
                name="call-me-hand"
                text="my socials"
                width={32}
                variant="h4"
              />
              {/* Socials */}
              <Box sx={{ py: { xs: 2, sm: 2 } }}>
                <Grid container justifyContent={matches ? "left" : "center"}>
                  <Grid item>
                    <Link
                      href="https://www.facebook.com/justin.zhao.33449"
                      underline="hover"
                    >
                      <IconTypography
                        variant="p"
                        text="facebook"
                        icon={
                          <FacebookOutlinedIcon sx={{ color: "#4267B2" }} />
                        }
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/justinzaho/"
                      underline="hover"
                    >
                      <IconTypography
                        variant="p"
                        text="@justinzaho"
                        icon={<InstagramIcon sx={{ color: "#C13584" }} />}
                      />
                    </Link>
                    <Link
                      href="https://github.com/zhaojustin"
                      underline="hover"
                    >
                      <IconTypography
                        variant="p"
                        text="github"
                        icon={<GitHubIcon sx={{ color: "#333" }} />}
                      />
                    </Link>
                    <Link
                      href="https://s7qyeew2b9w.typeform.com/to/XZFrlsfW"
                      underline="hover"
                    >
                      <IconTypography
                        variant="p"
                        text="email me!"
                        icon={<EmailOutlinedIcon />}
                      />
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fade>
  );
}

export default Home;
