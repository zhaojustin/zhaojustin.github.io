import React from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Photography from './components/Photography/Photography.js';
import Projects from './components/Projects/Projects.js';
import FoodDrink from './components/FoodDrink/FoodDrink.js';

export const HomeRoute = "/";
export const PhotographyRoute = "/photography/";
export const ProjectsRoute = "/projects/";
export const FoodDrinkRoute = "/fooddrink/";

class Routing extends React.Component {
    render() {
        return (
            <Home>
                <Route path={HomeRoute} exact component={Home} />
                <Route path={PhotographyRoute} component={Photography} />
                <Route path={ProjectsRoute} exact component={Projects} />
                <Route path={FoodDrinkRoute} component={FoodDrink} />
            </Home >
        );
    }
}
export default withRouter(Routing);