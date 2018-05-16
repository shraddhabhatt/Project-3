import React, { Component } from "react";
import "./Grid.css";

class Grid extends Component {
  render() {
    return (
    	<div className="row">
			<div className=" parallaxImage"></div>
 			
 			<div className="column one" >
			    <h2>Share —</h2>
			    <p>Want to get involved? Share the love and volunteer today.</p><br/>
			    <a href="/Events" type="button" className="btn btn-danger btn-lg">VOLUNTEER</a>
		    </div>

		    <div className="column two" >
			    <h2>Take —</h2>
			    <p>Want to get involved? Search our job database and make an appointment today.</p><br/>
			    <a href="/Career" type="button" className="btn btn-warning btn-lg">JOBS</a>
		    </div>
		</div>
	);
  }
}

export default Grid;

