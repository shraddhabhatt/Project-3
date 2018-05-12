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
                        Connecting People.Improving Skills.
                    </h2><hr/>
                    <p className="lead">
                        Youtism is a non-profit organization that exists to educate and connect
                        individuals and families to answers that matter: information and resources that help them make more informed decisions, 
                        build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.
                    </p>
                </div>
              </div>
            </div>

            
             


                    <div className="j">
         <div className="container-fluid text-center">
          <h2>Teams</h2>
          <br/>
          <div className="row">
            <div className="col-lg-4">
              <h4> Youth Club</h4>
              <img src="https://photos-images.active.com/file/1/305/3054961/optimized/c0c05b07-e66c-4d92-9363-f453573b267a.jpg" alt="..." className="img-thumbnail"/>
            </div>
            <div className="col-sm-4">
              <h4> Teen Premier</h4>
                <img src="http://cdn.teenink.com/artwork/Jun10/regular/f11801_1276897376.jpg" alt="soccer" className = "img-thumbnail"/>
             </div>
             <div className="col-sm-4">
              <h4> Adult Academy</h4>
                <img src ="https://si.wsj.net/public/resources/images/WK-BC350_SP_COL_G_20120621165541.jpg" alt="..." className ="img-thumbnail"/>
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