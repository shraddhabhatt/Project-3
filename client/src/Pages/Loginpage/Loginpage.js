//imports dependencies and files
import React, { Component } from "react";
// import { Link } from "react-router-dom";

//sets state to 0 or empty
class Loginpage extends Component {

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
     
    return (
      <div>
        
        <div className="jumbotron jumbotron-fluid ">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
       
      </div>

        
    );
  }
}
export default Loginpage;