import React from "react";
// import { Form } from 'react-bootstrap';
import "./Modalsetting.css" 

export const Postevent = props => (


  <div className="form-group Modalsetting" >
   
    
    <form>
          <div className="form-row">

            <div className="form-group">
              <label for="eventName">Event Name</label>
              <input type="text" className="form-control" id="eventName" placeholder="Event name goes here" />
            </div>

            <div className="form-group">
              <label for="eventDescription">Event Description</label>
              <textarea type="text" className="form-control" id="eventDescription" placeholder="Description" rows="3" />
            </div>
         </div>

          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>

          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>

          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

            <div className="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
      </form>

  
      <button type="submit" className="btn btn-primary">Submit</button>
    
  </div>

);
