//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";
import Imagegrid  from "../../components/Imagegrid";
import { Modal } from 'react-bootstrap';
import { Input, TextArea, FormBtn  } from "../../components/Form";

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

  render() {
    // inline sty
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
              <h2 className="display-4">Connecting People.Improving Skills.</h2><hr/>

              <p className="lead">Youtism is a non-profit organization that exists to educate and connect
               individuals and families to answers that matter: information and resources that help them make more informed decisions, 
               build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.</p>

        
              <Imagegrid/>

                
               
                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.toggleModal}><strong>POST JOBS HERE</strong></button>
                <Modal show={this.state.isActive} onHide={this.toggleModal}>
                    <div className="form-group Modalsetting" >
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroup-sizing-default">Job Title</span>
                        </div>
                          <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                      </div>
                      
                        <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroup-sizing-sm">Qualification</span>
                        </div>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>

                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="">Location</span>
                        </div>
                         <input type="text" className="form-control"/>
                      </div>

                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Job Description</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                 <button type="submit" className="btn btn-primary">Submit</button>
              </div>
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