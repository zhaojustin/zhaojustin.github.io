import React from "react";

import { Grid, Typography } from "@mui/material";

import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/lib/data.json";

function EmojiTypography(props) {
  return (
    <EmojiProvider data={emojiData}>
      <Grid container direction="row" alignItems="center" columnSpacing={2}>
        <Grid item>
          <Emoji name={props.name} width={props.width} />
        </Grid>
        <Grid item sx={{ mb: 0.5 }}>
          <Typography variant={props.variant}> {props.text}</Typography>
        </Grid>
      </Grid>
    </EmojiProvider>
  );
}

export default EmojiTypography;
