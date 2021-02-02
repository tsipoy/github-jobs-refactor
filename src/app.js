import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobDescriptionContainer from "./containers/jobDescription";
import { Home } from "./pages";

export default function app() {
  return (
    <Router>
      <Switch>
        <Route exact path="/description/:jobId">
          <JobDescriptionContainer />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
