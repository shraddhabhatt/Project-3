//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";

class Activities extends Component {

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

           {/* Activities*/}
          <div className="row">
              {/* Activity: Drawing*/}
              <div className="col-sm-3 ">
                <div className="card  card1" >
                  <img className="card-img-top" src={require("../../images/game1.jpg")}  alt="Card image cap"/>
                  <div className="card-body ">
                    <h5 className="card-title">Drawfy</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">CLICK HERE TO PLAY</a>
                  </div>
                </div>
              </div>

               {/* Activity :Trivia*/}
              <div className="col-sm-3">
                <div className="card  card1" >
                  <img className="card-img-top" src={require("../../images/img2.jpg")}  alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Trivia</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">CLICK HERE TO PLAY</a>
                  </div>
                </div>
              </div>

                {/* Activity :Find color*/}
               <div className="col-sm-3">
                <div className="card  card1" >
                  <img className="card-img-top" src={require("../../images/game2.jpg")}  alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Colorfy</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">CLICK HERE TO PLAY</a>
                  </div>
                </div>
              </div>

                {/* Activity :clickify*/}
               <div className="col-sm-3">
                <div className="card  card1" >
                  <img className="card-img-top" src={require("../../images/act1.jpg")}  alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Clickify</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">CLICK HERE TO PLAY</a>
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
            </div>
          {/*Footer */}
          <Footer/>
       </div>
      );
    }
}
export default Activities;