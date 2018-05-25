import React, { Component } from "react";
import "./Navbar.css";

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

              <li> <button className="glyphicon glyphicon-user">LOGOUT</button></li>

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


