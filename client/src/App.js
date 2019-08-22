import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coins from "./pages/Coins";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Coins} />
        <Route exact path="/coins" component={Coins} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
