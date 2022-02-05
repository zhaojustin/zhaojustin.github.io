import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CovidCard() {
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
            Covid Tracker
          </Typography>
          <Typography variant="p" color="text.secondary">
            In Fall 2020, NY State had unique quarantine guidelines for
            travelers from every state. To make things even more complicated, NY
            State released new guidelines for every state every single week. So,
            I made a tracker to consolidate every states' entry requirements to
            NY State.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CovidCard;
