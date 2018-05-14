import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Events.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";

import { Modal } from 'react-bootstrap';
import { Input, TextArea, Navtrial, FormBtn, EventsList } from "../../components/Form";
//sets state to 0 or empty

class Events extends Component {
  
    constructor(props) {
      super(props); 

        this.state = {
          isActive:false,
          isToggleOn: false,

          eventName: "",
          eventDescription: "",
          address: "",
          address2: "",
          city: "",
          state: "",
          zip: ""
        }
    
      this.handleEvents = this.handleEvents.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this);
      this.formChage    = this.formChange.bind(this);
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

    handleSubmit = (e) => { 
      e.preventDefault();

      alert("Your event has been submitted! Details: " + JSON.stringify(this.state));
       this.setState({
          eventName: "",
          eventDescription: "",
          address: "",
          address2: "",
          city: "",
          state: "",
          zip: ""
       })

    } 

    formChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
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

      const {eventName, eventDescription, address, address2, city, state, zip} = this.state;

    return (
      <div>
        <Header />  
        <Navbar/>
         <div className="row">

            <div className="col-4 imageside">
              <img  alt="Events picture" src={require("../../images/events4.jpg")} style={imagesetting}/>
            </div>
            <Navtrial />

            <div className="col-8 jobDetailSide">
              <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
                <div className="container">
                  <h2 className="display-4">Helping people get together.</h2><hr/>
                  <p className="lead">Youtism is an online platform that helps parents confronted with the challenge of raising children 
                  with autism. Here you will find events organized BY and FOR such parents, you can scroll and see on the map what events 
                  are available in your area, and post such events yourself!</p>

                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.toggleModal}><strong>POST EVENTS HERE</strong></button>
                
                <Modal show={this.state.isActive} onHide={this.toggleModal}>
                
                      <form onSubmit={this.handleSubmit}>
                          <label for="eventName"> Event Name </label>
                            <Input 
                            name="eventName"
                            id="eventName" 
                            placeholder="Event name goes here"
                            value={eventName}
                            onChange={this.formChange} />

                          <label for="eventDescription"> Event Description </label>
                            <TextArea 
                            name="eventDescription"
                            id="eventDescription" 
                            placeholder="Event description goes here"
                            value={eventDescription}
                            onChange={this.formChange} />

                          <label for="address"> Address </label>
                            <Input 
                            name="address"
                            id="address" 
                            placeholder="123 Main Street"
                            value={address}
                            onChange={this.formChange} />

                          <label for="address2">Address 2</label>
                            <Input 
                            name="address2"
                            id="address2" 
                            placeholder="Apartment, studio, or floor"
                            value={address2}
                            onChange={this.formChange} />

                          <label for="city">City</label>
                            <Input 
                            name="city"
                            id="city" 
                            placeholder="City"
                            value={city}
                            onChange={this.formChange} />

                          <label for="state">State</label>
                            <Input 
                            name="state"
                            id="state" 
                            placeholder="State"
                            value={state}
                            onChange={this.formChange} />

                          <label for="zip">Zip</label>
                            <Input 
                            name="zip"
                            id="zip" 
                            placeholder="Zip"
                            value={zip}
                            onChange={this.formChange} />

                          <FormBtn type="submit"> Submit event </FormBtn>
                      </form>
                   </Modal>

                <button onClick={this.handleEvents} type="button" className="btn btn-primary btn-lg btn-block"><strong>FIND EVENTS HERE</strong>
                  {this.state.isToggleOn ? <EventsList /> : null}
                </button>
                
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