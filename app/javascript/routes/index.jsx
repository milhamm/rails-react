import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
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
      </Switch>
    </Router>
  );
};

export default Routes;
