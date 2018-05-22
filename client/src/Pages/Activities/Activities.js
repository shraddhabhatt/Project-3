//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";
import "./Activities.css";

class Activities extends Component {

  render() {
    // inline style
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

          <div className="row">
            <div className="col-4 imageside">
            {/* Image*/}
            <img  alt="image1" src={require("../../images/act3.jpg")} style={imagesetting}/>
            </div>
          </div>

          {/* text in jumbotorn*/}
          <div className="col-8 jobDetailSide">
              <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
                 <div className="container">
                    <h2 className="display-4">Connecting People.Improving Skills.</h2><hr/>
                    <p className="lead">Youtism is a non-profit organization that exists to educate and connect
                     individuals and families to answers that matter: information and resources that help them make more informed decisions, 
                     build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.</p>
                 </div>
              </div>
          </div>

          <div className="jumbotron jumbotron-fluid homejumboforimage" >
          <div className="row">
            <div className="containerOutside">
           
              <div className="containerInside col-lg-6">
                <img src={require("../../images/game2.jpg")} alt="Avatar" className="imageAct img-responsive" />
                <div className="overlay">
                  <div className="instructions">
                   <h5>Hello World</h5>
                   <a href="https://anithasunil2008.github.io/TriviaGame/" className="btn btn-primary"> PLAY</a>
                  </div>
                </div>
              </div>


              <div className="containerInside col-lg-6">
                <img src={require("../../images/game3.jpg")} alt="Avatar" className="imageAct img-responsive" />
                <div className="overlay">
                  <div className="instructions">
                    <h5>Hello World</h5>
                    <a href="#" className="btn btn-primary"> PLAY</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <br />
          <br />

           <div className="row">
            <div className="containerOutside">
           
              <div className="containerInside col-lg-6">
                <img src={require("../../images/game2.jpg")} alt="Avatar" className="imageAct img-responsive" />
                <div className="overlay">
                  <div className="instructions">
                    <h5>Hello World</h5>
                    <a href="#" className="btn btn-primary"> PLAY</a>
                  </div>
                </div>
              </div>


              <div className="containerInside col-lg-6">
                <img src={require("../../images/game3.jpg")} alt="Avatar" className="imageAct img-responsive" />
                <div className="overlay">
                  <div className="instructions">
                    <h5>Hello World</h5>
                    <a href="#" className="btn btn-primary">PLAY</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
            
            {/* optional  text */}
            <div className="col-8 jobDetailSide">
                  <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
                     <div className="container">
                        <h2 className="display-4">Connecting People.Improving Skills.</h2><hr/>
                        <p className="lead">Youtism is a non-profit organization that exists to educate and connect
                         individuals and families to answers that matter: information and resources that help them make more informed decisions, 
                         build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.</p>
                     </div>
                  </div>
            </div> {/* end optional text*/}

          {/*Footer */}
          <Footer/>
       </div>
      );
    }
}
export default Activities;