 import React, { Component } from "react";
// import "./Imagegrid.css";

class Imagegrid extends Component {
  render() {
    return (
      <div className="container text-center">    
        <div className="row">

          <div className="col-sm-4">
            <img src={require("../../images/career1.jpg")} className="img-responsive" width="100%" height="auto" alt="Image"/>
          </div>

          <div className="col-sm-4"> 
            <img src={require("../../images/career2.jpg")} className="img-responsive" width="100%" height="200px" alt="Image"/>
          </div>

          <div className="col-sm-4">
            <img src={require("../../images/career3.jpg")} className="img-responsive" width="100%" height="200px" alt="Image"/>
          </div>

        </div>
      </div>
      );
    }
}
export default Imagegrid;