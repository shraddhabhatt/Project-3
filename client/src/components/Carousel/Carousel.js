//sets up the reusable Navbar component
import React, { Component } from "react";
import "./carousel.css";

class Carousel extends Component {
  render() {
    return (
      
       <img  alt="image1" src={require("../../images/img1.jpg")}/>
      
      
    );
  }
}

export default Carousel;