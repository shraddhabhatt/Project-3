//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";



//sets state to 0 or empty
class Home extends Component {

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
     const imagesetting = {
      "width" : "100%",
      "marginTop" : "130px",
      "height" : "100%"
      }

      const jumbotronsetting = {
        "background-color" : "white"

      }
    
    return (
      <div>
        <Header/>
        <Navbar/>
        <img  alt="image1" src={require("../../images/img1.jpg")} style={imagesetting}/>
        <Grid/>
        <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
        <div className="container">
          <h2 className="display-4">Connecting People.Improving Lives.</h2><hr/>
          <p className="lead">Youtism is a non-profit organization that exists to educate and connect
           individuals and families to answers that matter: information and resources that help them make more informed decisions, 
           build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.</p>
        </div>
      </div>
        
      </div>

        
    );
  }
}
export default Home;