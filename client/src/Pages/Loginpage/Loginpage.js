//imports dependencies and files
import React, { Component } from "react";
import "./Loginpage.css";
import { Input, TextArea, FormBtn} from "../../components/Form";
import Form from '../../components/Form';
import { Modal } from 'react-bootstrap';
import Login from "../../components/Login/Login.js";
import Register from "../../components/Register/Register.js";


//sets state to 0 or empty
class Loginpage extends Component {

	state = {
        isActive:false
    }
   
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
				 	
					 	<img className="size1" src={require("../../images/a2.png")}  alt="Cinque Terre"/>
					 		{/*button group for Login,Sign up , Guest user*/}
					 	    <div className="btn-group">
							    <button type="button" className="btn btn-success" onClick={() => this.setState({ showModal1:true, showModal2:false})}>LOGIN</button>
							    <a href="/Home" className="btn btn-primary " role="button" aria-pressed="true">GUEST USER</a>
								<button type="button" className="btn btn-warning" onClick={() => this.setState({ showModal2:true, showModal1:false})}>SIGN UP</button>
								    
								    {/*Modal for Login*/}
								    <Modal show={this.state.showModal1} onHide={() => this.setState({ showModal1:false})}>
					                    <Login />
					                </Modal>
									{/*Modal for Sign up */}
					                <Modal show={this.state.showModal2} onHide={() => this.setState({ showModal2:false})}>
					                 	<Register />
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



