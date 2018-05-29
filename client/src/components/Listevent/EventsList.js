import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import { List } from "./List";
import { ListItem } from "./ListItem";
import { Col, Row } from "../../components/Grid";
import Map from "../../components/Map/Map";
import API from "../../utils/API";
import './List.css';


class EventsList extends Component {
    state = {
            allevents: [],
            user: ""
        };
    
    componentDidMount() { 
       console.log(this.state);
       this.loadPosts();
       this.getCurrentUserId();
    }
    
    loadPosts = () => {    
		API.getEvents()
            .then(res => this.setState({ allevents: res.data }))
            .catch(err => console.log(err));
	};
    
    getCurrentUserId= () =>{
        let currentuser = sessionStorage.getItem('email'); 
        API.findUser(currentuser)
          .then((res) => {
                console.log("Return getCurrentUserId with res : " + res.data[0].id);
                this.setState({user: res.data[0].id});
            })
          .catch(err => console.log(err));
    }

    deleteEvents = (id, userid) => {
        console.log("Delete Button Clicked");
        var result = window.confirm("Are you sure you want to delete the event ? ");
            if (result == true) {
                API.deleteEvent(id, userid)
                    .then(res => this.loadPosts())
                    .catch(err => {
                        console.log(err);
                        alert("PERMISSION DENIED");
                    });
            } else {
                console.log("You pressed Cancel!");
            }
        
    };

    render() {
        return (
		<Row>
          <Col size="md-8">
            <div className="panel panel-primary">
                <div className="panel-body">
                  <List>
                    {this.state.allevents.map(event => (
                      <ListItem
                        key={event.id}
                        name={event.name}
                        description={event.description}
                        date={event.date}

      					        address1={event.address1}
                  			address2={event.address2}
                  			city={event.city}
                  			state={event.state}
                  			zipcode={event.zip}>  
                        <Button bsSize="small" bsStyle="danger" onClick={() => {this.deleteEvents(event.id, this.state.user)}} >
                                <Glyphicon glyph="trash" /> 
                        </Button>
                     </ListItem>))}
                  </List>
                </div>
              </div>
            </Col>
            <Col size="md-4">
                <div id="map" style={{height: '580px', width: '350px'}}>
                    <Map 
                        markers={this.state.allevents}
                        isMarkerShown 
                     />
                </div>
            </Col>
        </Row>         
    	);
    }
}
export default EventsList;