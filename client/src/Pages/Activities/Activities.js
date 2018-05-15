//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";
import Gamegrid  from "../../components/Gamegrid";

//sets state to 0 or empty
class Activities extends Component {

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    const imagesetting = {
      "width" : "100%",
       "marginTop": "-150px",
      "height" : "600px"
    }

    const jumbotronsetting = {
      "background-color" : "white"
        
    }

    return (
      <div>
        <Navbar/>
          
              <img  alt="image1" src={require("../../images/act3.jpg")} style={imagesetting}/>
            
            
            <div className="col-12 jobDetailSide">
              <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
                <div className="container">
                    <h2 className="display-4">
                        Connecting People. Improving Skills.
                    </h2><hr/>
                    <p className="lead">
                        Youtism is a non-profit organization that exists to educate and connect
                        individuals and families to answers that matter: information and resources that help them make more informed decisions, 
                        build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.
                    </p>
                </div>
              </div>
            </div>

      <div className="container">
        <div className="row">
          <div className="container">

            <div className="col-lg-6">
              <div className="card">
                  <img className="card-img-top img-responsive" src={require("../../images/rox1.jpg")} alt="Card image cap" />
              </div>  
            </div>

            <div className="col-lg-6">
              <div className="card ">
                <img className="card-img-top img-responsive" src={require("../../images/rox.jpg")} alt="Card image cap" />
              </div>  
            </div>
          </div>  

        </div> 
      </div>
      
       <div className="container">
        <div className="row">
          <div className="container">

            <div className="col-lg-6">
              <div className="card">
                  <img className="card-img-top img-responsive" src={require("../../images/rox2.jpg")} alt="Card image cap" />
              </div>  
            </div>

            <div className="col-lg-6">
              <div className="card">
                <img className="card-img-top img-responsive" src={require("../../images/rox4.jpg")} alt="Card image cap" />
              </div>  
            </div>

          </div>  
        </div> 
      </div>
        
    
      <Footer/>
       </div>

        
    );
  }
}
export default Activities;