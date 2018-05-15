//imports dependencies and files
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Career from "./Pages/Career";
import Activities from "./Pages/Activities";
import Events from "./Pages/Events";
import "./App.css";


const App = () => (
  <Router>
    <div>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Career" component={Career} />
        <Route exact path ="/Activities" component={Activities} />
        <Route exact path="/Events" component={Events}  />
         
       </Switch>
    </div>
  </Router>
);

export default App;