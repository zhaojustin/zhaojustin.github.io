import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import EmojiTypography from "../../../EmojiTypography/EmojiTypography";

function WorkingCard() {
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
          image={require("./img/thumbnail.jpg")}
          alt="thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <EmojiTypography
              text="Working..."
              name="wrench"
              variant="h5"
              width={32}
            />
          </Typography>

          <Typography variant="p" color="text.secondary">
            I'm always working on a new project during my free time. Stay
            tuned...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default WorkingCard;
