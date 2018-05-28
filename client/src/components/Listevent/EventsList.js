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
            allevents: []
        };
    
    componentDidMount() {
       console.log(this.state);
       this.loadPosts();
    }
    
    loadPosts = () => {    
		API.getEvents()
            .then(res => this.setState({ allevents: res.data }))
            .catch(err => console.log(err));
	};
    
    deleteEvents = (id) => {
        console.log("Delete Button Clicked");
        API.deleteEvent(id)
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
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
                        <Button bsSize="small" bsStyle="danger" onClick={() => {this.deleteEvents(event.id)}} >
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