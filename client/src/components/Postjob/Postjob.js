import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Postjob extends Component {
	constructor(props) {
		super(props);

		  this.state = {
            jobTitle: "",
            companyName: "",
            qualification: "",
            location: "",
            description: ""
          }
  
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.formChage    = this.formChange.bind(this);  

	}

	submitJob = (e) => {
      e.preventDefault();
      console.log("Not Yet Inside Submit Post!!");
    
      if (this.state.jobTitle) {
          console.log("Inside Submit Post!!");
          API.saveJob({
            jobTitle: this.state.jobTitle,
            companyName:this.state.companyName,
            location: this.state.location,
            description: this.state.description,
            qualification: this.state.qualification
          })
          .then(console.log("Return backed with res"))
          .catch(err => console.log(err));
      }

      alert("Your job has been posted! Details: " + JSON.stringify(this.state));
       this.setState({
            jobTitle: "",
            companyName: "",
            qualification: "",
            location: "",
            companyName: "",
            description: ""
       });

    } 

    formChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    render() {

    	const {jobTitle, companyName, description, qualification, location} = this.state;
      const jobPostForm = {
        "padding": "25px",
        "margin":"20px"
      }
    	return (
              // <form onSubmit={this.handleSubmit}>
                <form style={jobPostForm}>
                  <label for="jobTitle"> Job Title </label>
                    <Input 
                        name="jobTitle"
                        id="jobTitle" 
                        placeholder="Job title goes here"
                        value={jobTitle}
                        onChange={this.formChange} />

                  <label for="companyName"> Company Name </label>
                     <Input 
                        name="companyName"
                        id="companyName" 
                        placeholder="Company Name goes here"
                        value={companyName}
                        onChange={this.formChange} />

                  <label for="qualification"> Qualification </label>
                      <Input 
                        name="qualification"
                        id="qualification" 
                        placeholder="Qualification"
                        value={qualification}
                        onChange={this.formChange} />

                  <label for="location"> Location </label>
                      <Input 
                        name="location"
                        id="location" 
                        placeholder="Where is the job located?"
                        value={location}
                        onChange={this.formChange} />

                  <label for="description">Description</label>
                      <TextArea 
                        name="description"
                        id="jobDescription" 
                        placeholder="Description"
                        value={description}
                        onChange={this.formChange} />


                  <FormBtn onClick={this.submitJob} style={{"margin-bottom" : "30px"}}> Post job </FormBtn>
                  </form>
    		    );
      }
}

export default Postjob;