import React from "react";
import { Box, Stack, Link } from "@mui/material";

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
        <Link
          href="#"
          underline="none"
          button
          component={RouterLink}
          to={HomeRoute}
        >
          About
        </Link>
        <Link
          href="#"
          underline="none"
          button
          component={RouterLink}
          to={PhotographyRoute}
        >
          Photography
        </Link>
        <Link
          href="#"
          underline="none"
          component={RouterLink}
          to={ProjectsRoute}
        >
          Projects
        </Link>
        <Link
          href="#"
          underline="none"
          component={RouterLink}
          to={FoodDrinkRoute}
        >
          Eats+Drinks
        </Link>
      </Stack>
    </Box>
  );
}

export default Navigation;
