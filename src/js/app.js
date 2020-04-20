import React from "react";
import ReactDOM from "react-dom";
import "./../sass/style.scss"; // adres do głównego pliku SASS
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import ForTrainers from "./ForTrainers";
import PoleStudios from "./PoleStudios";
import MainApp from "./MainApp";

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/trainers">
            <ForTrainers />
          </Route>
          <Route path="/pole_studios">
            <PoleStudios />
          </Route>
          <Route path="/main_app">
            <MainApp />
          </Route>
        </Switch>
    </Router>
  );
};

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <>
      <App />
    </>,
    document.getElementById("app")
  );
});


// <Route path="/blog">
//   <Blog />
// </Route>

// <Route path="/pricing">
//   <Pricing />
// </Route>
