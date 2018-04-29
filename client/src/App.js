import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={} />
       
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
