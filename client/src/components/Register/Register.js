import React, { Component } from "react";

import { Input, FormBtn } from "../../components/Form";

class Register extends Component {

  constructor(props) {
      super(props); 

        this.state = {

          username: "",
          registerEmail: "",
          registerPassword: "",
          registerReinsert: ""

        }
    
      this.registerSubmit = this.registerSubmit.bind(this);
      this.registerChange = this.registerChange.bind(this);
    };

    registerSubmit = (e) => { 
      e.preventDefault();

      alert("Your registration credentials have been submitted! Details: " + JSON.stringify(this.state));
      this.setState({
          username: "",
          registerEmail: "",
          registerPassword: "",
          registerReinsert:""
       })

    } 


    registerChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    render () {

      const {username, registerEmail, registerPassword, registerReinsert} = this.state;

      return (

          <form onSubmit={this.registerSubmit}>

                          <label for="username"> Username</label>
                            <Input 
                            name="username"
                            id="username" 
                            placeholder="JohnSmith13"
                            value={username}
                            onChange={this.registerChange} />


                          <label for="registerEmail"> Email address</label>
                            <Input 
                            name="registerEmail"
                            id="registerEmail" 
                            placeholder="johnsmith@email.com"
                            value={registerEmail}
                            onChange={this.registerChange} />

                          <label for="registerPassword"> Password </label>
                            <Input 
                            name="registerPassword"
                            id="registerPassword" 
                            placeholder="Enter Password"
                            value={registerPassword}
                            onChange={this.registerChange} />

                            <label for="registerReinsert"> Re-enter Password </label>
                            <Input 
                            name="registerReinsert"
                            id="registerReinsert" 
                            placeholder="Re-enter Password"
                            value={registerReinsert}
                            onChange={this.registerChange} />
 
                         <FormBtn type="submit"> Register </FormBtn>
                         
          </form>               

      );
    }
}

export default Register;


  