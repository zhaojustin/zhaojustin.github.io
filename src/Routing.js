import React from "react";
import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";
import Navigation from "./components/Header/Navigation.js";

import Home from "./components/Home/Home.js";
import Photography from "./components/Photography/Photography.js";
import Projects from "./components/Projects/Projects.js";
import FoodDrink from "./components/FoodDrink/FoodDrink.js";

export const HomeRoute = "/";
export const PhotographyRoute = "/photography";
export const ProjectsRoute = "/projects";
export const FoodDrinkRoute = "/fooddrink";

class Routing extends React.Component {
  render() {
    return (
      <div>
        {/* Navigation Links */}
        <Box sx={{ py: { xs: 2, sm: 4 } }}>
          <Navigation />
        </Box>
        {/* Routes */}
        <Routes>
          <Route path={HomeRoute} exact element={<Home />} />
          <Route path={PhotographyRoute} exact element={<Photography />} />
          <Route path={ProjectsRoute} exact element={<Projects />} />
          <Route path={FoodDrinkRoute} exact element={<FoodDrink />} />
        </Routes>
      </div>
    );
  }
}
export default Routing;
