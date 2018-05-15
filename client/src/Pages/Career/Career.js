//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";
import Imagegrid  from "../../components/Imagegrid";
import { Modal } from 'react-bootstrap';
import Postjob from "../../components/Postjob/Postjob.js";

class Career extends Component {

  constructor(props) {
      super(props); 
        this.state = {
            isActive:false
          }
    }     
     
   toggleModal = () => {
      this.setState({
      isActive:!this.state.isActive
     })
    }

render() {
    // inline style
       const imagesetting = {
        "width" : "100%",
         "marginTop": "-150px",
        "height" : "auto"
      }
      
      const jumbotronsetting = {
        "background-color" : "white"
      }
    

    return (
      <div>
        
        <Navbar/>
        <div className="row">
            {/*image*/}
            <div className="col-4 imageside">
              <img  alt="image2" src={require("../../images/career.jpg")} style={imagesetting}/>
            </div>
            {/*about career*/}
            <div className="col-8 jobDetailSide">
              <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
                <div className="container">

                    <h2 className="display-4">Connecting People.Improving Skills.</h2><hr/>
                    <p className="lead">Youtism is a non-profit organization that exists to educate and connect
                     individuals and families to answers that matter: information and resources that help them make more informed decisions, 
                     build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.</p>
                    
                    {/*3 images*/}
                    <Imagegrid/>
                    
                    {/*toggle button for post jobs*/}
                    <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.toggleModal}><strong>POST JOBS HERE</strong></button>
                      
                      {/*post job form will open in Modal*/}
                      <Modal show={this.state.isActive} onHide={this.toggleModal}>
                          <Postjob />
                      </Modal>
                      {/*Job list will show up on click */}
                    <button type="button" className="btn btn-primary btn-lg btn-block"><strong>FIND JOBS HERE</strong></button>
                </div>
              </div>
            </div>
          </div> {/*end about career*/}
           
           {/*footer*/} 
          <Footer/>
       </div>        
    );
  }
}
export default Career;