//imports dependencies and files
import React, { Component } from "react";
import "./Loginpage.css";
import { Input, TextArea, FormBtn} from "../../components/Form";
import Form from '../../components/Form';
import { Modal } from 'react-bootstrap';
import Login from "../../components/Login/Login.js";
import Register from "../../components/Register/Register.js";
import Guestlogin from "../../components/Guestlogin/Guestlogin.js";

class Loginpage extends Component {
	// set state for Modal
	state = {
        isActive:false
    }
   	// toggle Modal
     toggleModal = () => {
        this.setState({
            isActive:!this.state.isActive
        })
     }
 
  render() {

    return(
      	
            <div className="front">
            	{/*for full size image */}
				<div className="jumbotron bgimage">
				  {/* setting to get full size for image*/}
				  <br/><br/><br/>
				  <br/><br/><br/>
				  <br/><br/><br/>
				 {/*jumbotron box for Login,Sign up , Guest user*/} 
				<div className="jumbotron jumbotron-fluid textjumbo ">
				   	<div className="container">
				 	
					 	<img className="size1" src={require("../../images/a2.png")}  alt="Cinque Terre"/><br/><br/>
					 		{/*button group for Login,Sign up , Guest user*/}
					 	    <div className="btn-group">
							    
							    {/*button  for Login */}
							    <button type="button" className="btn btn-success" onClick={() => this.setState({ showModal1:true, showModal2:false, showModal3:false})}>LOGIN</button>
							    
							    {/*button  for Guestlogin */}
							    <button type="button" className="btn btn-info" onClick={() => this.setState({ showModal1:false, showModal2:false, showModal3:true})}>GUEST USER</button>
							    
							    {/*button  for sign up */}
								<button type="button" className="btn btn-warning" onClick={() => this.setState({ showModal1:false, showModal2:true, showModal3:false})}>SIGN UP</button>
								    
								    {/*Modal for Login*/}
								    <Modal show={this.state.showModal1} onHide={() => this.setState({ showModal2:false , showModal3:false})}>
					                    <Login />
					                </Modal>
									
									{/*Modal for Sign up */}
					                <Modal show={this.state.showModal2} onHide={() => this.setState({ showModal1:false , showModal3:false})}>
					                 	<Register />
					                </Modal>

					            {/*Modal for Guest user */}
					                <Modal show={this.state.showModal3} onHide={() => this.setState({showModal1:false , showModal2:false})}>
					                 	<Guestlogin />
					                </Modal>
							</div>
				 	
				  	</div>
				</div>
				{/* setting to get full size for image*/}
				<br/><br/><br/>
				<br/><br/><br/>
				<br/><br/><br/>
				<br/><br/>

				</div>
			</div>
		);
    }
}
export default Loginpage;



