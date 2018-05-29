import React, { Component } from "react";
import "./Logout.css";

class LogoutBtn extends Component {
    
    render (){
        return (

          <div id="myLogoutButton">
                    <button type = "button"
              
               className =  "btn btn-info lg1"
                ><a href="/"><span className="glyphicon glyphicon-log-out"/> Logout</a> </button>
          </div>
        )
    }

};

export default LogoutBtn;