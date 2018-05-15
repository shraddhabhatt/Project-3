//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
     
      <nav className="navbar navbar-default ">
        <div className="row "> 
          <img className="navbar-brand" alt="logo" src={require("../../images/logo.png")}/>
           <ul className="ulNavbar">

              <li className="itemRight "><a href="/Events">EVENTS</a></li>

              <li className="itemRight "><a href="/Activities">ACTIVITIES</a></li>

              <li className="itemRight  "><a href="/Career">CAREERS</a></li>

              <li className="itemRight  "><a href="/Home">HOME</a></li>

              <li className="itemRight  "><a href="/">Login</a></li>
          </ul>
        </div>
      </nav>

      
    );
  }
}

export default Navbar;


