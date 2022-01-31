import React from "react";

import { Grid, Typography } from "@mui/material";

function IconTypography(props) {
  return (
    <Grid container direction="row" alignItems="center" columnSpacing={2}>
      <Grid item>{props.icon}</Grid>
      <Grid item sx={{ mb: 0.5 }}>
        <Typography variant={props.variant}> {props.text}</Typography>
      </Grid>
    </Grid>
  );
}

export default IconTypography;
