import React, {Component} from "react";
// import { Form } from 'react-bootstrap';
import "./Modalsetting.css" 

export const Postjob = props => (


  <div className="form-group Modalsetting" >
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Job Title</span>
      </div>
        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
    </div>
    
      <div className="input-group input-group-sm mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Qualification</span>
      </div>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="">Location</span>
      </div>
       <input type="text" className="form-control"/>
    </div>

  <div className="form-group">
    <label for="exampleFormControlTextarea1">Job Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
    
  </div>

);
