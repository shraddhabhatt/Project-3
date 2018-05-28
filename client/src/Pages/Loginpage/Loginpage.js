//imports dependencies and files
import React, {Component} from "react";
import "./Loginpage.css";
import {Input,TextArea,FormBtn} from "../../components/Form";
import Form from '../../components/Form';
import {Modal} from 'react-bootstrap';
import Login from "../../components/Login/Login.js";
import Register from "../../components/Register/Register.js";
import Guestlogin from "../../components/Guestlogin/Guestlogin.js";
import API from "../../utils/API";

// This is for google Auth
import GoogleLogin from 'react-google-login';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
class Loginpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginError: false,
            redirectToReferrer: false,
            name: "",
            email:""
        };
        this.signup = this.signup.bind(this);
    }

	submitUser = (e) => {  

            console.log("Inside Submit User!!");
            API.saveUser({
              name: this.state.name,
              email:this.state.email,
            })
            .then((res) => {
                console.log("Return user with res : " + res);
                // console.log("This is the user name: " + res.name);
                // console.log("This is the user email: " + res.email);
            })
            .catch(err => console.log(err));
            
           
    }

    signup(res, type) {
        let postData;
        let name;
        let email;
        if (type === 'google' && res.w3.U3) {
            postData = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            };
            this.setState({
                name: postData.name,
                email: postData.email
            });
        }
        
        if (postData) {
            PostData('/signin', postData).then((result) => {
                let responseJson = result;
                sessionStorage.setItem("userData", JSON.stringify(responseJson));
                this.setState({
                    redirectToReferrer: true,
                  
                });
                this.submitUser();
            });
        } 
        else {

        }

        console.log("This is the user name: " + postData.name);
        console.log("This is the user email: " + postData.email);
     
    }

    signOut(){
        sessionStorage.removeItem("userData");

        this.setState({
            redirectToReferrer: false
        });
    }

    render() {

        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {

            return ( < Redirect to = {'/Home'}/>)
        }
        
            const responseGoogle = (response) => {
                console.log("google console");
                console.log(response);
                this.signup(response, 'google');
                this.submitUser();
             
            }
            return (
                <div className = "front" > { /*for full size image */ } 
                    <div className = " bgimage" > { /* setting to get full size for image*/ } 
                        <div className=" ovf">
                            {/*<img className="ss  w3-container w3-center w3-animate-top" alt="logo" src={require("../../images/logo.png")}/>*/}
                           
                            <GoogleLogin clientId = "795374708066-fg769hi02d0hfj3jgkbvvb4g72nogch1.apps.googleusercontent.com"
                            className="googleButton animated zoomIn" buttonText="G+"
                            onSuccess = {responseGoogle}
                            
                            onFailure = {responseGoogle}/>

                            <a href="/Home"   type="button" > <img id="guestUser"  className="animated zoomIn" alt="logo" src={require("../../images/guest.png")}/></a>
                        </div>
                        
                    </div> 
                    
                </div>
            );
        }
    }
    export default Loginpage;