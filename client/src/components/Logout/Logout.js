import React, { Component } from "react";
import "./Logout.css";

class LogoutBtn extends Component {
	
	render (){
	    return (

		  <div id="myLogoutButton">
		            <button className="logout"><a href="/"> Logout</a> </button>
		  </div>
        )
    }

};

export default LogoutBtn;
