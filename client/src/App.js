import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Coins from "./pages/Coins";

import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/coins" component={Coins} />
        <Route exact path="/coins/:id" component={Detail} />
        <Route component={NoMatch} />


      </Switch>
    </div>
  </Router>
);

export default App;
