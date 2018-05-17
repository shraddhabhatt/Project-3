//imports dependencies and files
import React, { Component } from "react";
import "./Loginpage.css";
import { Input, TextArea, FormBtn} from "../../components/Form";
import Form from '../../components/Form';
import { Modal } from 'react-bootstrap';
import Login from "../../components/Login/Login.js";
import Register from "../../components/Register/Register.js";

// This is for Auth
import GoogleLogin from 'react-google-login';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
require('dotenv').config();


//sets state to 0 or empty
class Loginpage extends Component {

	constructor(props) {
		super(props);
		   this.state = {
		   loginError: false,
		   redirect: false
	};
	this.signup = this.signup.bind(this);
	}

	signup(res, type) {
		let postData;
   
	   if (type === 'google' && res.w3.U3) {
	   postData = {
		 name: res.w3.ig,
		 provider: type,
		 email: res.w3.U3,
		 provider_id: res.El,
		 token: res.Zi.access_token,
		 provider_pic: res.w3.Paa
	   };
   }
   
   if (postData) {
   PostData('signup', postData).then((result) => {
	  let responseJson = result;
	  sessionStorage.setItem("userData", JSON.stringify(responseJson));
	  this.setState({redirect: true});
   });
   } else {}
   }
   
	

	state = {
        isActive:false
    }
   
     toggleModal = () => {
        this.setState({
            isActive:!this.state.isActive
        })
     }
 
  render() {

	if (this.state.redirect || sessionStorage.getItem('userData')) {
		return (<Redirect to={'/home'}/>)
	}
	
	const responseGoogle = (response) => {
		console.log("google console");
		console.log(response);
		this.signup(response, 'google');
	}

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

								{/* This is for google auth */}
									<GoogleLogin
										clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
										buttonText="Login with Google"
										onSuccess={responseGoogle}
										onFailure={responseGoogle}/>
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



