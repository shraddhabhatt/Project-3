//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";

//sets state to 0 or empty
class Activities extends Component {

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
     const imagesetting = {
      "width" : "100%",
      "marginTop" : "50px",
      "height" : "25%;"

      }

    return (
      <div>
        
        <Navbar/>
        
    
      <Footer/>
       </div>

        
    );
  }
}
export default Activities;