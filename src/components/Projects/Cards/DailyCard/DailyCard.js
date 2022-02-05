import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function DailyCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea
        onClick={() => {
          console.log("onclick");
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={require("./img/thumbnail.png")}
          alt="thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Daily Tracker
          </Typography>
          <Typography variant="p" color="text.secondary">
            After the success of my Boba Tracker in 2021, I decided to upgrade
            the tracker. This is because I began drinking a lot of coffee
            throughout 2021 as well, so I decided to track that, too. At the
            same time, I added a 'Daily' section to serve as a primitive
            journal.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DailyCard;
