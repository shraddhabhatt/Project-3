import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Events.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";
import { Modal } from 'react-bootstrap';
import { Input, TextArea, Navtrial, FormBtn, EventsList } from "../../components/Form";
import Postevent from "../../components/Postevent/Postevent.js";
//sets state to 0 or empty

class Events extends Component {
  
    constructor(props) {
      super(props); 

        this.state = {
          isActive:false,
          isToggleOn: false
        }
        this.handleEvents = this.handleEvents.bind(this); 
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    handleEvents = () => {
      this.setState(function(prevState) {
        return {isToggleOn: !prevState.isToggleOn};
      });
    }  
   
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
          
        <Navbar/>
         <div className="row">
            {/*image*/}
            <div className="col-4 imageside">
              <img  alt="Events picture" src={require("../../images/events4.jpg")} style={imagesetting}/>
            </div>

            {/*about Events*/}
            <div className="col-8 jobDetailSide">
              <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
                <div className="container">
                  <h2 className="display-4">Helping people get together.</h2><hr/>
                  <p className="lead">Youtism is an online platform that helps parents confronted with the challenge of raising children 
                  with autism. Here you will find events organized BY and FOR such parents, you can scroll and see on the map what events 
                  are available in your area, and post such events yourself!</p>
                  
                  {/*button for post events*/}
                  <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.toggleModal}><strong>POST EVENTS HERE</strong></button>
                    
                    {/*post events in Modal*/}
                    <Modal show={this.state.isActive} onHide={this.toggleModal}>
                        <Postevent />
                    </Modal>
                  {/* see events list on click*/}
                  <button onClick={this.handleEvents} type="button" className="btn btn-primary btn-lg btn-block"><strong>FIND EVENTS HERE</strong>
                    {this.state.isToggleOn ? <EventsList /> : null}
                  </button>
                </div>
              </div>
            </div>
          </div>

        {/*footer*/}
        <Footer/>
      </div>        
    );
  }
}
export default Events;