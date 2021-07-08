import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import LandingNav from "./LandingNav";
import LogIn from "./LogIn";
import MainComponent from "./MainComponent";

import "../styles/landingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/landingPage">
            <Landing />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route path="/about">
            <LandingNav />
            <About />
          </Route>
          <Route path="/contact">
            <LandingNav />
            <Contact />
          </Route>
          <Route path="/homePage">
            <MainComponent />
          </Route>
          <Redirect to="/landingPage">
            <Landing />
          </Redirect>
        </Switch>
      </div>
    );
  }
}

export default LandingPage;
