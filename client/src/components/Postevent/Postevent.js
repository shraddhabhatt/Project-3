import React, { Component } from "react";

import { Input, TextArea, FormBtn } from "../../components/Form";

class Postevent extends Component {
	constructor(props) {
		super(props);

		  this.state = {

	          eventName: "",
	          eventDescription: "",
	          address: "",
	          address2: "",
	          city: "",
	          state: "",
	          zip: ""
          }
  
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formChange   = this.formChange.bind(this);
	}

	handleSubmit = (e) => { 
      e.preventDefault();

      alert("Your event has been submitted! Details: " + JSON.stringify(this.state));
       this.setState({
          eventName: "",
          eventDescription: "",
          address: "",
          address2: "",
          city: "",
          state: "",
          zip: ""
       })

    } 

    formChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    render() {

        const {eventName, eventDescription, address, address2, city, state, zip} = this.state;
    
    	return (

                      <form onSubmit={this.handleSubmit}>

                          <label for="eventName"> Event Name </label>
                            <Input 
                            name="eventName"
                            id="eventName" 
                            placeholder="Event name goes here"
                            value={eventName}
                            onChange={this.formChange} />

                          <label for="eventDescription"> Event Description </label>
                            <TextArea 
                            name="eventDescription"
                            id="eventDescription" 
                            placeholder="Event description goes here"
                            value={eventDescription}
                            onChange={this.formChange} />

                          <label for="address"> Address </label>
                            <Input 
                            name="address"
                            id="address" 
                            placeholder="123 Main Street"
                            value={address}
                            onChange={this.formChange} />

                          <label for="address2">Address 2</label>
                            <Input 
                            name="address2"
                            id="address2" 
                            placeholder="Apartment, studio, or floor"
                            value={address2}
                            onChange={this.formChange} />

                          <label for="city">City</label>
                            <Input 
                            name="city"
                            id="city" 
                            placeholder="City"
                            value={city}
                            onChange={this.formChange} />

                          <label for="state">State</label>
                            <Input 
                            name="state"
                            id="state" 
                            placeholder="State"
                            value={state}
                            onChange={this.formChange} />

                          <label for="zip">Zip</label>
                            <Input 
                            name="zip"
                            id="zip" 
                            placeholder="Zip"
                            value={zip}
                            onChange={this.formChange} />

                          <FormBtn type="submit"> Submit event </FormBtn>
                          
                      </form>
    		);
    }
}

export default Postevent;