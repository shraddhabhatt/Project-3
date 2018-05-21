import React, { Component } from "react";

import { Input, TextArea, FormBtn } from "../../components/Form";

class Postjob extends Component {
	constructor(props) {
		super(props);

		  this.state = {

            jobTitle: "",
            companyName: "",
            qualification: "",
            location: "",
            jobDescription: ""
          }
  
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formChage    = this.formChange.bind(this);  

	}

	formChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => { 
      e.preventDefault();

      alert("Your job has been posted! Details: " + JSON.stringify(this.state));
       this.setState({
            jobTitle: "",
            companyName: "",
            qualification: "",
            location: "",
            jobDescription: ""
       });

    } 

    render() {

    	const {jobTitle, companyName, jobDescription, qualification, location} = this.state;
      const jobPostForm = {
        "padding": "20px"
      }
    
    	return (

                      <form onSubmit={this.handleSubmit} style={jobPostForm}>
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
                          placeholder="Company Name"
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

                        <label for="jobDescription">Description</label>
                          <TextArea 
                          name="jobDescription"
                          id="jobDescription" 
                          placeholder="Description"
                          value={jobDescription}
                          onChange={this.formChange} />


                        <FormBtn type="submit"> Post job </FormBtn>
                      </form>

    		);
    }
}

export default Postjob;