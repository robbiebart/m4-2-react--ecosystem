import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/">
          <About />
        </Route>
        <Route path="/items/:itemId">Items</Route>
      </Switch>
    </Router>
  );
};

export default App;
