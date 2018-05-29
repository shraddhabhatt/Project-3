import React, { Component } from "react";
import Geocode from "./geocode";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import moment from 'moment';
import PropTypes from "prop-types";
import DatePicker, {CalendarContainer} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import Datetime from 'react-datetime';
// import "../../../node_modules/react-datetime/css/react-datetime.css";
import './Postevent.css';



class Postevent extends Component {

	constructor(props) {
		super(props);

      // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
     Geocode.setApiKey("AIzaSyCGjATBrCWBodZMNsGI0UoPPw9ayD3-D4g");
     
		  this.state = {

	          eventName: "",
	          eventDescription: "",
	          address1: "",
	          address2: "",
	          city: "",
	          state: "",
            zip: "",
            lat: "",
            lng: "",
            startDate: moment(),
            user: "",
            selectedValue:''
          }
  
        this.handleChange = this.handleChange.bind(this);
        // this.focousOut = this.focousOut.bind(this);
        // this.handleChange = this.handleChange.bind(this);
  }
  
  // focousOut(value) {
  //   if(!moment(value).isValid()) {
  //    this.setState({selectedValue: ''}); 
  //   }
  // }

  // handleChange(date) {
  //  this.setState({ selectedValue: date });
  // }

  handleChange(date) {
    this.setState({
      startDate: date
      }, () => console.log(moment(this.state.startDate).format("MM/DD/YY HH:mm")));
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
      address = address || 'Ferrol, Galicia, Spain';
      // Enable or disable logs. Its optional.
      Geocode.enableDebug();
      // Get latidude & longitude from address.
      Geocode.fromAddress(address).then(
         response => {
           const { lat, lng } = response.results[0].geometry.location;
           console.log(lat, lng);
           this.setState({lat: lat});
           this.setState({lng: lng});
           this.getCurrentUserId();
         },
         error => {
           console.error(error);
         }
       );
     };

    getCurrentUserId= () =>{

        let currentuser = sessionStorage.getItem('email'); 
        API.findUser(currentuser)
          .then((res) => {
                console.log("Return getCurrentUserId with res : " + res.data[0].id);
                this.setState({user: res.data[0].id});
                this.submitPost();
            })
          .catch(err => console.log(err));
    }
          
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
                  date: moment(this.state.startDate).format("MM/DD/YY HH:mm"),
                  UserId: Number(this.state.user)
                })
                .then(console.log("Return backed with res"))
                .catch(err => console.log(err));
            }
      
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
                        <div className="col-md-6">
                          <label for="eventName"> Event Name </label>
                            <Input 
                            name="eventName"
                            id="eventName" 
                            placeholder="Event name goes here"
                            value={eventName}
                            onChange={this.formChange} />
                          </div>  

                          <div className="col-md-6" id="datetimepicker">
                              <label for="eventDateTime"> Date Time</label>
                              {/* <Datetime
                                  timeFormat='HH:mm'
                                  value={this.state.selectedValue}
                                  onChange={this.handleChange}
                                  onBlur={this.focousOut}
                                  locale='en-US'
                                  dateFormat='MM/DD/YY'
                                  closeOnSelect
                                /> */}
                              <DatePicker
                                  selected={this.state.startDate}
                                  onChange={this.handleChange}
                                  calendarContainer={MyContainer}
                                  showTimeSelect
                                  timeFormat="HH:mm"
                                  timeIntervals={15}
                                  dateFormat="LLL"
                                  timeCaption="time"
                              />
                              </div>
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
function MyContainer({ className, children }) {
  return (
    <div id='mycontainer' style={{ overflow: 'visible', padding: '10px', background: '#216ba5', color: '#fff' }}>
      <CalendarContainer className={className}>
        <div style={{ background: '#f0f0f0' }}>When is your event?</div>
        <div style={{ position: 'relative' }}>
          {children}
        </div>
      </CalendarContainer>
    </div>
  );
} 

MyContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
export default Postevent;