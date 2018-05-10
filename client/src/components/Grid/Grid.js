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
		    <button type="button" className="btn btn-danger btn-lg">VOLUNTEER</button>

		  </div>

		  <div className="column two" >
		    <h2>Give —</h2>
		    <p>Want to give back or donate? Share the love and give today.</p><br/>
		    <button type="button" className="btn btn-warning btn-lg">DONATE</button>
		  </div>


		</div>
		
		  
		
		);
  }
}

export default Grid;

