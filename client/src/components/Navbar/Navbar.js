import React, { Component } from "react";
import LoginPage from "../../Pages/Loginpage/Loginpage";
import "./Navbar.css";
import Logo from "../Logo";

class Navbar extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="row "> 
         {/*logo Image*/}
         <div className="col-4">
          <Logo />
          </div>
          {/*Nav links*/}
           <ul className=" nav ">


              <li>   <button type = "button"  className =  "btn btn-info"   ><a href="/"> Logout</a> </button></li>

              <li><a className ="size" href="/Events">EVENTS</a></li>

              <li><a className ="size" href="/Activities">ACTIVITIES</a></li>

              <li><a className ="size" href="/Career">CAREERS</a></li>

              <li><a className ="size" href="/Home">HOME</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

