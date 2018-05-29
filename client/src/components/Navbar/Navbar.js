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

              <li>   <button type = "button"
               
               className =  "btn btn-info"
                ><a href="/"> Logout</a> </button></li>

              <li ><a className ="size" href="/Events">EVENTS</a></li>

              <li ><a className ="size" href="/Activities">ACTIVITIES</a></li>

              <li ><a className ="size" href="/Career">CAREERS</a></li>

              <li ><a className ="size" href="/Home">HOME</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

