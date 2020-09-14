import React from "react";
import "./Routes.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "../Components/LoginPage";
import HomePage from "../Components/HomePage";
import AddUserPage from "../Components/AddUserPage";
import UserDetailsPage from "../Components/UserDetailsPage";

export const routes = {
  login: "/",
  home: "/homepage",
  signUp: "/signup",
  userDetailsPage: "/user_details/:id"
};

function Routes() {
  return (
    <Router>
      <div className="Container">
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.signUp} component={AddUserPage} />
        <Route exact path={routes.userDetailsPage} component={UserDetailsPage} />
      </div>
    </Router>
  );
}

export default Routes;
