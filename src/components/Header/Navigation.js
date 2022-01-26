import React from "react";
import { Box, Stack, Link } from "@mui/material";

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
        <Link href="#" underline="none">
          {"About"}
        </Link>
        <Link href="#" underline="none">
          {"Photography"}
        </Link>
        <Link href="#" underline="none">
          {"Projects"}
        </Link>
        <Link href="#" underline="none">
          {"Food/Drink"}
        </Link>
      </Stack>
    </Box>
  );
}

export default Navigation;
