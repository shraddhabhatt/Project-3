//imports dependencies and files
import React, {Component} from "react";
import "./Loginpage.css";
import {Input,TextArea,FormBtn} from "../../components/Form";
import Form from '../../components/Form';
import {Modal} from 'react-bootstrap';
import Login from "../../components/Login/Login.js";
import Register from "../../components/Register/Register.js";
import Guestlogin from "../../components/Guestlogin/Guestlogin.js";

// This is for google Auth
import GoogleLogin from 'react-google-login';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
class Loginpage extends Component {

    // componentDidMount() {
    //     sessionStorage.clear();
    //     setInterval( () => this.context.router.transitionTo('/'), 2000);
    // }

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

    signOut(){
        sessionStorage.removeItem("userData");

        this.setState({
            redirectToReferrer: false
        });
    }

    render() {


  //   const imagesetting = {
  //   "width" : "250px",
  //   "marginTop" : "100px",
  //   "height" : "auto"
  // }
        
        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {

            return ( < Redirect to = {'/Home'}/>)
        }
        
            
            const responseGoogle = (response) => {
                console.log("google console");
                console.log(response);
                this.signup(response, 'google');
            }
            return (
                <div className = "front" > { /*for full size image */ } 
                    <div className = " bgimage" > { /* setting to get full size for image*/ } 
                        <div className=" ovf">
                            {/*<img className="ss  w3-container w3-center w3-animate-top" alt="logo" src={require("../../images/logo.png")}/>*/}

                            <GoogleLogin clientId = "795374708066-fg769hi02d0hfj3jgkbvvb4g72nogch1.apps.googleusercontent.com"
                            className="googleButton animated zoomIn"
                            buttonText="G+"
                            onSuccess = {
                                responseGoogle
                            }
                            onFailure = {
                                responseGoogle
                            }


                            />

                            <a href="/Home"   type="button" > <img id="guestUser"  className="animated zoomIn" alt="logo" src={require("../../images/guest.png")}/></a>
                        </div>
                        
                    </div> 
                    
                </div>
            );
        }
    }
    export default Loginpage;
