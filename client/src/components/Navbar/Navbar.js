import React, { Component } from "react";
import "./Navbar.css";
// import Loginpage from "../../Pages/Loginpage/Login.js";
import GoogleLogout from 'react-google-login';



class Navbar extends Component {

  // logout(e){
  //   e.preventDefault();
  //   this.props.logout();
  // }

  render() {

    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="row "> 
         {/*logo Image*/}

          <img className="navbar-brand" alt="logo" src={require("../../images/logo.png")}/>
          {/*Nav links*/}
           <ul className=" nav ">

              <li> <a href="/"  >LOGOUT</a></li>

              <li ><a href="/Events">EVENTS</a></li>

              <li ><a href="/Activities">ACTIVITIES</a></li>

              <li ><a href="/Career">CAREERS</a></li>

              <li ><a href="/Home">HOME</a></li>
          </ul>
        </div>
        {/* <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={logout}
        >
        </GoogleLogout> */}
      </nav>
    );
  }
}

export default Navbar;


