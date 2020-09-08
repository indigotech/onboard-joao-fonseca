import React from "react";
import "./Routes.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "../Components/LoginPage";
import HomePage from "../Components/HomePage";

export const routes = {
  login: "/",
  home: "/homepage",
};

function Routes() {
  return (
    <Router>
      <div className="Container">
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.home} component={HomePage} />
      </div>
    </Router>
  );
}

export default Routes;
