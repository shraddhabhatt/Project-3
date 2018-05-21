import React from "react";

export const ListItem = props =>
  <li className="list-group-item">
		<span className="list-group-item-heading pull-left">
    		<h4>{props.name}</h4>
		</span>	
		<span className="list-group-item-text pull-right">	
				<p>{props.date}</p>
		</span>
		<br/>
		<span className="btn-group pull-right">
    	<a href={props.link} rel="noopener noreferrer" target="_blank">
    		<button className="btn btn-default">Edit</button>
    	</a>
    </span>
    <span className="list-group-item-heading pull-left">
    		<h4>{props.description}</h4>
		</span>	
		<span className="list-group-item-heading pull-left">
				<p>Location: {props.address1},{props.city},{props.state},{props.zipcode}</p>
		</span>
  </li>;
