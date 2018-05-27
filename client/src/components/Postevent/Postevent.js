import React, { Component } from "react";
import Geocode from "./geocode";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";


class Postevent extends Component {

	constructor(props) {
		super(props);

      // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
     // Geocode.setApiKey("AIzaSyCGjATBrCWBodZMNsGI0UoPPw9ayD3-D4g");
     
		  this.state = {

	          eventName: "",
	          eventDescription: "",
	          address1: "",
	          address2: "",
	          city: "",
	          state: "",
            zip: "",
            lat: "",
            lng: ""
          }
  
       // this.handleSubmit = this.handleSubmit.bind(this);
        this.formChange   = this.formChange.bind(this);
  }
  
  loadPosts = () => {    
    API.getEvents()
      .then(res =>
        this.setState({
          eventName: "",
          eventDescription: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: ""
       })
      )
      .catch(err => console.log(err));
  };
  
   getLatLng = event => { 
      event.preventDefault();

      const address = this.state.address1 + ", " + this.state.city + ", "+ this.state.state + ", " + this.state.zip; 
      console.log("Find Lat/Lng for address : "+address);

      this.getLatitudeLongitude(address);
    } 

    getLatitudeLongitude = address => {
      // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
      // address = address || 'Ferrol, Galicia, Spain';
      // // Enable or disable logs. Its optional.
      // Geocode.enableDebug();
      // // Get latidude & longitude from address.
      // Geocode.fromAddress(address).then(
      //    response => {
      //      const { lat, lng } = response.results[0].geometry.location;
      //      console.log(lat, lng);
      //      this.setState({lat: lat});
      //      this.setState({lng: lng});
      //      this.submitPost();
      //    },
      //    error => {
      //      console.error(error);
      //    }
      //  );
     };

    submitPost = () =>{
      
      console.log("Not Yet Inside Submit Post!!")
      
            if (this.state.eventName) {
                console.log("Inside Submit Post!!")
                API.saveEvent({
                  name: this.state.eventName,
                  description: this.state.eventDescription,
                  address1: this.state.address1,
                  address2: this.state.address2,
                  city: this.state.city,
                  state: this.state.state,
                  zip: this.state.zip,
                  lat: this.state.lat,
                  lng: this.state.lng,
                  date: "01/01/2019",
                  UserId: 1
                })
                .then(console.log("Return backed with res"))
                .catch(err => console.log(err));
            }

            alert("Your event has been submitted! Details: " + JSON.stringify(this.state));
            this.setState({
                eventName: "",
                eventDescription: "",
                address1: "",
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
        const {eventName, eventDescription, address1, address2, city, state, zip} = this.state;
        const eventPostForm = {
            "padding": "25px", 
            "width": "100%"
        }
       	return (
                      <form style={eventPostForm} className="container">
                        <div className="row">
                          <label for="eventName"> Event Name </label>
                            <Input 
                            name="eventName"
                            id="eventName" 
                            placeholder="Event name goes here"
                            value={eventName}
                            onChange={this.formChange} />
                          </div>  
                        
                         <div className="row">
                          <label for="eventDescription"> Event Description </label>
                            <TextArea 
                            name="eventDescription"
                            id="eventDescription" 
                            placeholder="Event description goes here"
                            value={eventDescription}
                            onChange={this.formChange} />
                          </div>  
                        
                         <div className="row">
                          <label for="address1"> Address </label>
                            <Input 
                            name="address1"
                            id="address1" 
                            placeholder="123 Main Street"
                            value={address1}
                            onChange={this.formChange} />
                          </div>  
                          
                          <div className="row">
                          <label for="address2">Address 2</label>
                            <Input 
                            name="address2"
                            id="address2" 
                            placeholder="Apartment, studio, or floor"
                            value={address2}
                            onChange={this.formChange} />
                          </div>  

                          <div className="row">
                          <div className="col-md-4">
                          <label for="city">City</label>
                            <Input 
                            name="city"
                            id="city" 
                            placeholder="City"
                            value={city}
                            onChange={this.formChange} />
                          </div>  

                          <div className="col-md-4">
                          <label for="state">State</label>
                            <Input 
                            name="state"
                            id="state" 
                            placeholder="State"
                            value={state}
                            onChange={this.formChange} />
                          </div>  

                          <div className="col-md-4">
                          <label for="zip">Zip</label>
                            <Input 
                            name="zip"
                            id="zip" 
                            placeholder="Zip"
                            value={zip}
                            onChange={this.formChange} />
                          </div>  
                        </div>    

                          <FormBtn onClick={this.getLatLng}> Submit event </FormBtn>
                          
                      </form>
    		);
    }
}

export default Postevent;