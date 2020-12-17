import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";
import Error from "./components/home/Error";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/movie/:id" component={Movie} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
