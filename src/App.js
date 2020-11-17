import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";

export const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/movie/:id" component={Movie} />
    </Router>
  );
};
