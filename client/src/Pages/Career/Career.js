//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";
import Imagegrid  from "../../components/Imagegrid";
import { Modal } from 'react-bootstrap';
import Postjob from "../../components/Postjob/Postjob.js";
import JobsList from "../../components/Listjob/JobsList.js";
import {FormGroup, InputGroup, Button, FormControl} from "react-bootstrap";
import LogoutBtn from "../../components/Logout";
import SubscribeJobs from "../../components/SubscribeJobs/SubscribeJobs.js";


class Career extends Component {

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
      isActive:!this.state.isActive
     });
    }

    handleEvents = () => {
      this.setState(function(prevState) {
        return {isToggleOn: !prevState.isToggleOn};
      });
    }  

render() {
    // inline style
       const imagesetting = {
        "width" : "100%",
         "marginTop": "-150px",
        "height" : "auto"
      }
      
      const jumbotronsetting = {
        "backgroundColor" : "white"
      }
    

    return (
      <div>
        
        <Navbar/>
        <LogoutBtn />  
        <div className="row">
            {/*image*/}
            <div className="col-4 imageside">
              <img  alt="image2" src={require("../../images/career.jpg")} style={imagesetting}/>
            </div>
            {/*about career*/}
            <div className="col-8 jobDetailSide">
              <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
                <div className="container">

                    <h2 className="display-4">Connecting People. Improving Skills.</h2><hr/>
                    <p className="lead">Youtism is intended to become a platform that will educate and connect
                     individuals and families, and provide a solution to the lack of information and resources available online at the moment regarding autism spectrum disorders.
                     This way, families will make better, more informed decisions regarding the needs of their loved ones so that they can build and strengthen relationships with them, and more importantly, thrive. 
                     Together, we’ll help you connect the pieces.</p>
                    
                    {/*3 images*/}
                    <Imagegrid/>
                    
                    {/*toggle button for post jobs*/}
                    <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.toggleModal}><strong>POST JOBS HERE</strong></button>
                      
                      {/*post job form will open in Modal*/}
                      <Modal show={this.state.isActive} onHide={this.toggleModal}>
                          <Postjob />
                      </Modal>
                      {/*Job list will show up on click */}
                      <button onClick={this.handleEvents} type="button" className="btn btn-primary btn-lg btn-block">
                  <strong> FIND JOBS HERE</strong></button>
                  {this.state.isToggleOn ? <JobsList/>: null}
                </div>
              </div>
            </div>
          </div> {/*end about career*/}

       <SubscribeJobs />
           
           {/*footer*/} 
          <Footer/>
       </div>        
    );
  }
}
export default Career;