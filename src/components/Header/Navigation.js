import React from "react";
import { Box, Stack, Link, Typography } from "@mui/material";

import {
  ProjectsRoute,
  HomeRoute,
  PhotographyRoute,
  FoodDrinkRoute,
} from "../../Routing.js";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 2, md: 6 }}
      >
        <Link underline="none" component={RouterLink} to={HomeRoute}>
          <Typography className="link">About</Typography>
        </Link>
        <Link underline="none" component={RouterLink} to={PhotographyRoute}>
          <Typography className="link">Photography</Typography>
        </Link>
        <Link underline="none" component={RouterLink} to={ProjectsRoute}>
          <Typography className="link">Projects</Typography>
        </Link>
        <Link underline="none" component={RouterLink} to={FoodDrinkRoute}>
          <Typography className="link">Food/Drink</Typography>
        </Link>
      </Stack>
    </Box>
  );
}

export default Navigation;
