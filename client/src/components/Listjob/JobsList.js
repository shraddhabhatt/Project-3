import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { List } from "./List";
import { ListItem } from "./ListItem";
// import { Col, Row } from "../../components/Grid";
// import Map from "../../components/Map/Map";
import API from "../../utils/API";


class JobsList extends Component {
    state = {
            alljobs: []
        };

    componentDidMount() {
       this.loadPosts();
    }
    
    loadPosts = () => {    
		API.getJobs()
            .then(res => {
                console.log(res.data);
                this.setState({
                    alljobs: res.data })
            })  
            .catch(err => console.log(err));
	};
  
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                  <List>
                    {this.state.alljobs.map(job => (
                      <ListItem
                        key={job.id}
                        jobTitle={job.name}
                        companyName={job.companyName}
                        description={job.description}
     		            qualification={job.qualification}
                        location={job.location}>
                     </ListItem>))}
                  </List>
                </div>
            </div>  
    	);
    }
}
export default JobsList;