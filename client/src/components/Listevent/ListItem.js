import React from "react";

export const ListItem = props =>
  <li className="list-group-item">
		<span >
    		<h4>Activity Name : {props.name}</h4>
		</span>	
		<span >	
				<p>Date : {props.date}</p>
		</span>	
    	<span>
    		<h4> Description : {props.description}</h4>
		</span>	
		<span className="list-group-item-heading pull-left">
				<p>Location: {props.address1}, {props.city}, {props.state}, {props.zipcode}</p>
		</span>
		// <span >
	 //    	<a href={props.link} rel="noopener noreferrer" target="_blank">
	 //    		{ <button className="btn btn-default">Edit</button> }
	 //    	</a>
  //   	</span>
  </li>;
