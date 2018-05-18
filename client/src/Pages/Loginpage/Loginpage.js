//imports dependencies and files
import React, {
	Component
} from "react";
import "./Loginpage.css";
import {
	Input,
	TextArea,
	FormBtn
} from "../../components/Form";
import Form from '../../components/Form';
import {
	Modal
} from 'react-bootstrap';
import Login from "../../components/Login/Login.js";
import Register from "../../components/Register/Register.js";
import Guestlogin from "../../components/Guestlogin/Guestlogin.js";

// This is for google Auth
import GoogleLogin from 'react-google-login';
import {
	PostData
} from '../../services/PostData';
import {
	Redirect
} from 'react-router-dom';


class Loginpage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loginError: false,
			redirectToReferrer: false
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
			PostData('/signin', postData).then((result) => {
				let responseJson = result;
				sessionStorage.setItem("userData", JSON.stringify(responseJson));
				this.setState({
					redirectToReferrer: true
				});
			});
		} else {}
	}
	// set state for Modal
	state = {
		isActive: false
	}
	// toggle Modal
	toggleModal = () => {
		this.setState({
			isActive: !this.state.isActive
		})
	}


	render() {

		if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
			return ( < Redirect to = {
					'/Home'
				}
				/>)
			}

			const responseGoogle = (response) => {
				console.log("google console");
				console.log(response);
				this.signup(response, 'google');
			}

			return (

				<div className = "front" > { /*for full size image */ } 
				<div className = "jumbotron bgimage" > { /* setting to get full size for image*/ } 
				<br/> <br/> <br/>
				<br/> <br/> <br/>
				<br/> <br/> <br/> { /*jumbotron box for Login,Sign up , Guest user*/ } 
				<div className = "jumbotron jumbotron-fluid textjumbo " >
				<div className = "container" >

				<img className = "size1"
				src = {
					require("../../images/a2.png")
				}
				alt = "Cinque Terre" /> <br/> < br/> { /*button group for Login,Sign up , Guest user*/ } 
				<div className = "btn-group" >

				{ /*button  for Login */ } 
				<button type = "button"
				className = "btn btn-success"
				onClick = {
					() => this.setState({
						showModal1: true,
						showModal2: false,
						showModal3: false
					})
				} >LOGIN</button>

				{ /*button  for Guestlogin */ } 
				<button type = "button"
				className = "btn btn-info"
				onClick = {
					() => this.setState({
						showModal1: false,
						showModal2: false,
						showModal3: true
					})
				} > GUEST USER </button>

				{ /*button  for sign up */ } 
				<button type = "button"
				className = "btn btn-warning"
				onClick = {
					() => this.setState({
						showModal1: false,
						showModal2: true,
						showModal3: false
					})
				} > SIGN UP </button>

				<GoogleLogin clientId = "795374708066-fg769hi02d0hfj3jgkbvvb4g72nogch1.apps.googleusercontent.com"
				buttonText = "Login with Google"
				onSuccess = {
					responseGoogle
				}
				onFailure = {
					responseGoogle
				}
				/>

				{ /*Modal for Login*/ } 
				<Modal show = {
					this.state.showModal1
				}
				onHide = {
					() => this.setState({
						showModal2: false,
						showModal3: false
					})
				} >
				<Login/>
				</Modal>

				{ /*Modal for Sign up */ } 
				<Modal show = {
					this.state.showModal2
				}
				onHide = {
					() => this.setState({
						showModal1: false,
						showModal3: false
					})
				} >
				<Register />
				</Modal>

				{ /*Modal for Guest user */ } 
				<Modal show = {
					this.state.showModal3
				}
				onHide = {
					() => this.setState({
						showModal1: false,
						showModal2: false
					})
				} >
				<Guestlogin />
				</Modal> 
				</div>

				</div> 
				</div> { /* setting to get full size for image*/ } 
				<br /> < br /> < br />
				<br /> < br /> < br />
				<br /> < br /> < br />
				<br /> < br />

				</div> 
				</div>
			);

		}
	}

	export default Loginpage;