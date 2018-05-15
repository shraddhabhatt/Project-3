import React from "react";

import "./Modalsetting.css";

export const Signup = props => (
   <div className="form-group Modalsetting">
    
    <div className="form-group" >
    <label for="exampleInputUser">User Name</label>
    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div className="form-group">
    <label for="reinsertPassword">Re-type Password</label>
    <input type="password" className="form-control" id="reinsertPassword" placeholder="Re-insert Password" />
    </div>
  <button type="submit" className="btn btn-primary">Submit</button>

  </div>
);