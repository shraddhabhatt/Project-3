//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";
// import "./Career.css";

import { Modal } from 'react-bootstrap';
import { Input, TextArea, FormBtn , Postjob } from "../../components/Form";


class Career extends Component {

  state = {
        isActive:false
    }
   
     componentWillMount(){
        // Modal.setAppElement('body');
     }

     toggleModal = () => {
        this.setState({
            isActive:!this.state.isActive
        })
     }




//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
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
        <Header/>
        <Navbar/>
        <div className="row">

            <div className="col-4 imageside">
              <img  alt="image2" src={require("../../images/career.jpg")} style={imagesetting}/>
            </div>

            <div className="col-8 jobDetailSide">
              <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
            <div className="container">
              <h2 className="display-4">Connecting People. Improving Skills.</h2><hr/>
              <p className="lead">Youtism is a non-profit organization that exists to educate and connect
               individuals and families to answers that matter: information and resources that help them make more informed decisions, 
               build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.</p>

                <div className="container text-center">           
                  <div className="row">
                      <div className="col-sm-4">
                        <img src={require("../../images/career1.jpg")} className="img-responsive" width="100%" height="200px" alt="Image"/>
                        
                      </div>
                      <div className="col-sm-4"> 
                        <img src={require("../../images/career2.jpg")} className="img-responsive" width="100%" height="200px" alt="Image"/>
                        
                      </div>
                      <div className="col-sm-4">
                        <img src={require("../../images/career3.jpg")} className="img-responsive" width="100%" height="200px" alt="Image"/>
                      </div>
                  </div>
                </div><br/>

                
               
                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.toggleModal}><strong>POST JOBS HERE</strong></button>
                <Modal show={this.state.isActive} onHide={this.toggleModal}>
                <Postjob/>
              </Modal>

              <button type="button" className="btn btn-primary btn-lg btn-block"><strong>FIND JOBS HERE</strong></button>
             </div>
           </div>
         </div>
        </div>
            

       
        <Footer/>
       </div>

        
    );
  }
}
export default Career;