import React from "react";

export const ListItem = props =>
  <li className="list-group-item">
		<span >
    		<h4>Job Title : {props.jobTitle}</h4>
		</span>	
		<span >	
				<h4>CompanyName : {props.companyName}</h4>
		</span>	
    	<span>
    		<h4> Description : {props.description}</h4>
		</span>	
		<span>
    		<h4> Qualification : {props.qualification}</h4>
		</span>	
		<span >
				<h4>Location: {props.location}</h4>
		</span>
  </li>;
