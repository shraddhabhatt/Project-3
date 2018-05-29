import React, { Component } from "react";
import {FormGroup, InputGroup, Button, FormControl} from "react-bootstrap";
import API from "../../utils/API";

class SubscribeJobs extends Component { 
	constructor (props) {
		super(props);

		this.state = {
			jobsemailid: ""
		}

		this.subscribeJobsForm = this.subscribeJobsForm.bind(this);
		this.subscribeJobsChange   = this.subscribeJobsChange.bind(this);
	}

	subscribeJobsChange = (e) => {
      this.setState({ jobsemailid: e.target.value});
    }

    subscribeJobsForm = (e) => {
      e.preventDefault();
      console.log("Not Yet Inside subscribe Post!!");
    
      if (this.state.jobsemailid) {
          console.log("Inside subscribe Post!!");
          API.saveEmailJobs({
            jobsemailid: this.state.jobsemailid
            
          })
          .then(console.log("Return backed with res"))
          .catch(err => console.log(err));
      }

      alert("Your email has been saved! Details: " + JSON.stringify(this.state));
       
       this.setState({
            jobsemailid: ""
       });

    } 

	render () {
		const { jobsemailid } = this.state;
	
		return (
			
	    <div className="jumbotron jumbotron-fluid">
          <div className="container">

            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <h2 className="text-center">Get jobs alerts here!</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <p>Enter your email address to get the latest updates right now in your inbox. If you know that an employer is looking for help, or you are one yourself and want to post it on our website, please register and sign in!</p>
              </div>
            </div>

            <div className="row">
                      <div className="col-lg-4"></div>
                      <div className="col-lg-4">
                          <FormGroup>
                              <InputGroup>
                                <FormControl 
                                name="jobsemailid" 
                                id="jobsemailid"
                                value={jobsemailid}
                                onChange={this.subscribeJobsChange} 
                                type="email" 
                                placeholder="Enter your email address here" 
                                style={{"borderRadius": "20px 0 0 20px", "border": "2px solid gray", "height": "50px"}}/>
                                  <InputGroup.Button>
                                     <Button onClick={this.subscribeJobsForm} style={{"background" : "orange", "border": "2px solid gray", "border-radius": "0 20px 20px 0", "height": "50px"}}>Subscribe</Button>
                                  </InputGroup.Button>
                              </InputGroup>
                          </FormGroup>
                      </div>  
            </div>

          </div> 
        </div>   	
				)

    }
}

export default SubscribeJobs;

