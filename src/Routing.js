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
        <Box sx={{ py: { xs: 2, sm: 6 }, pt: { xs: 2, sm: 12 } }}>
          <Navigation />
        </Box>
        {/* Routes */}
        <Routes>
          <Route path={HomeRoute} element={<Home />} />
          <Route path={PhotographyRoute} element={<Photography />} />
          <Route path={ProjectsRoute} element={<Projects />} />
          <Route path={FoodDrinkRoute} element={<FoodDrink />} />
        </Routes>
      </div>
    );
  }
}
export default Routing;
