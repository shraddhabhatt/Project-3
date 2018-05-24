import React, { Component } from "react";
import "./Navbar.css";
import Loginpage from "../../Pages/Loginpage/Loginpage";
import { connect } from 'react-redux';
// import { logout } from '../../Pages/Loginpage/Loginpage';

class Navbar extends Component {

  // Loginpage(e){
  //   e.preventDefault();
  //   this.props.logout();
  // }

  render() {

    const { isAuthenticated } = this.props.auth;

    // const userLinks = {
    //   <ul className=" nav ">
    //     <li><Link  to="" > Log out </Link></li>
    //   </ul>
    // }

    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="row "> 
         {/*logo Image*/}

          <img className="navbar-brand" alt="logo" src={require("../../images/logo.png")}/>
          {/*Nav links*/}
           <ul className=" nav ">

              <li> <a href="#">LOGOUT</a></li>

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

// Navbar.prototype = {
//   // auth: React.PropTypes.object.isRequired,
//   Loginpage: React.PropTypes.func.isRequired
// }

// function mapStateToProps(state){
//   return {
//     auth: state.auth
//   }
// }
export default connect({Loginpage} )(Navbar);


