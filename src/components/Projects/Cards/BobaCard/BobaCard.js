import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function BobaCard() {
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
            Boba Tracker
          </Typography>
          <Typography variant="p" color="text.secondary">
            My New Year's Resolution for 2021 was to drink less boba, as it is
            costly and bad for my health. To discourage myself from buying it as
            often, I created a webapp to track every single time I drank boba.
            That way, it would serve as a reminder/detterent from getting boba
            all the time.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BobaCard;
