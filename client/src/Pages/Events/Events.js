import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Events.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";

import { Modal } from 'react-bootstrap';
import { Input, TextArea, FormBtn , Postevent } from "../../components/Form";
//sets state to 0 or empty
class Events extends Component {

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
      "marginTop": "150px",
      "height" : "350px"  
      }

       const jumbotronsetting = {
        "background-color" : "white"
        
      }

    return (
      <div>
        <Header />  
        <Navbar/>
         <div className="row">

            <div className="col-4 imageside">
              <img  alt="Events picture" src={require("../../images/events4.jpg")} style={imagesetting}/>
            </div>

            <div className="col-8 jobDetailSide">
              <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
                <div className="container">
                  <h2 className="display-4">Helping people get together.</h2><hr/>
                  <p className="lead">Youtism is an online platform that helps parents confronted with the challenge of raising children 
                  with autism. Here you will find events organized BY and FOR such parents, you can scroll and see on the map what events 
                  are available in your area, and post such events yourself!</p>

                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.toggleModal}><strong>POST EVENTS HERE</strong></button>
                <Modal show={this.state.isActive} onHide={this.toggleModal}>
                <Postevent />
                   </Modal>

                <button type="button" className="btn btn-primary btn-lg btn-block"><strong>FIND EVENTS HERE</strong></button>
                
                </div>
              </div>
            </div>

        </div>
    
        <Footer/>
      </div>

        
    );
  }
}
export default Events;