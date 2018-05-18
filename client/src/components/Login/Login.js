import React, { Component } from "react";

import { Input, FormBtn } from "../../components/Form";

class Login extends Component {

  constructor(props) {
      super(props); 

        this.state = {

          loginEmail: "",
          loginPassword: ""

        }
    
      this.loginSubmit = this.loginSubmit.bind(this);
      this.loginChange = this.loginChange.bind(this);
    };

    loginSubmit = (e) => { 
      e.preventDefault();

      alert("Your login credentials have been submitted! Details: " + JSON.stringify(this.state));
      this.setState({
        
          loginEmail: "",
          loginPassword: ""
       })

    } 


    loginChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    render () {

      const {loginEmail, loginPassword} = this.state;

      return (

          <form onSubmit={this.loginSubmit}>
                          <label for="loginEmail"> Email address</label>
                            <Input 
                            name="loginEmail"
                            id="loginEmail" 
                            placeholder="johnsmith@email.com"
                            value={loginEmail}
                            onChange={this.loginChange} />

                          <label for="loginPassword"> Password </label>
                            <Input 
                            name="loginPassword"
                            id="loginPassword" 
                            placeholder="Password"
                            value={loginPassword}
                            onChange={this.loginChange} />

 
                         <FormBtn type="submit"> Log In </FormBtn>

                         <a href="/auth/google" className="btn btn-danger"><span class="fa fa-google-plus"></span> Google</a>
          </form>               

      );
    }
}

export default Login;


  