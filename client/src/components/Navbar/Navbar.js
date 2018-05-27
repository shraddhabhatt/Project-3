import React, { Component } from "react";
import LoginPage from "../../Pages/Loginpage/Loginpage";
import "./Navbar.css";

class Navbar extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="row "> 
         {/*logo Image*/}

          <img className="navbar-brand" alt="logo" src={require("../../images/logo.png")}/>
          {/*Nav links*/}
           <ul className=" nav ">

              <li ><a href="/Events">EVENTS</a></li>

              <li ><a href="/Activities">ACTIVITIES</a></li>

              <li ><a href="/Career">CAREERS</a></li>

              <li ><a href="/Home">HOME</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

