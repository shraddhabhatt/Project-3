//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";
import "./Activities.css";
import LogoutBtn from "../../components/Logout";

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

    const iframe = {
        "position": "absolute",
        "left" : "0",
        "right": "0",
        "top": "0",
        "bottom": "0",
        "z-index": "100"
    }

    return (
      <div>
        <Navbar/>
        <LogoutBtn />    

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
                    <h2 className="display-4">Connecting People. Improving Skills.</h2><hr/>
                    <p className="lead">Youtism is a non-profit organization that exists to educate and connect
                     individuals and families to answers that matter: information and resources that help them make more informed decisions, 
                     build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.</p>
                 </div>
              </div>
          </div>


        <div className="jumbotron jumbotron-fluid homejumboforimage" >
          <div className="row">
            <div className="containerOutside">
           
              <div className="containerInside col-lg-6 col-md-8">
                <img src={require("../../images/game2.jpg")} alt="Color Recognition Game" className="imageAct img-responsive" />
                <div className="overlay">
                  <div className="instructions">
                    <h2>Colorfy</h2>
                    <a href="https://shraddhabhatt.github.io/Color_Play/Color_Recognition.html" className="btn btn-primary btn-center"> PLAY</a>
                  </div>
                </div>
              </div>


              <div className="containerInside col-lg-6 col-md-8">
                <img src={require("../../images/drawify.jpg")} alt="Drawing Activity" className="imageAct img-responsive" />
                <div className="overlay">
                  <div className="instructions">
                    <h2>Drawfy</h2>
                    <a href="https://anithasunil2008.github.io/Color-Drawing-Recognition/color_draw_something.html" className="btn btn-primary btn-center"> PLAY</a>
                  </div>
                </div>
              </div>

           </div>
          </div>
<br />
          <div className="row">
            <div className="containerOutside">
           
              <div className="containerInside col-lg-6 col-md-8">
                <img src={require("../../images/click.webp")} alt="Avatar" className="imageAct img-responsive" />
                <div className="overlay">
                  <div className="instructions">
                    <h2>Clickify</h2>                 
                    <a href="https://click-me-game-react.herokuapp.com/" className="btn btn-primary btn-center">PLAY</a>
                  </div>
                </div> 
              </div>

              <div className="containerInside col-lg-6 col-md-8">
                <img src={require("../../images/game3.jpg")} alt="Trivia Game" className="imageAct img-responsive" />
                <div className="overlay">
                  <div className="instructions">
                    <h2>Trivia Game</h2>
                    <a href="https://anithasunil2008.github.io/TriviaGame/" className="btn btn-primary btn-center">PLAY</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
      </div>

          {/*Footer */}
          <Footer/>
       </div>
      );
    }
}
export default Activities;
