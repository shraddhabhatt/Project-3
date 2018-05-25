import React from "react";

export const ListItem = props =>
  <li className="list-group-item">
		<span >
    		<h4>Job Title : {props.jobTitle}</h4>
		</span>	
		<span >	
				<p>companyName : {props.companyName}</p>
		</span>	
    	<span>
    		<h4> Description : {props.description}</h4>
		</span>	
		<span>
    		<h4> Qualification : {props.qualification}</h4>
		</span>	
		<span >
				<p>Location: {props.location}</p>
		</span>
  </li>;
