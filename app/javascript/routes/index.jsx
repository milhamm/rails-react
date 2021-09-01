import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipe from "../components/Recipe";
import Recipes from "../components/Recipes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipes" exact>
          <Recipes />
        </Route>
        <Route path="/recipe/:id" exact>
          <Recipe />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
