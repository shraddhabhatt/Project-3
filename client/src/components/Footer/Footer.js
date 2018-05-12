import React, {Component} from 'react';
import "./Footer.css";
import Boxes from "../Boxes/Box.js";
import Background from "../../images/footer16.png";

var footerStyle = {
  width: "100%",
  height: "200px",
  backgroundImage: `url(${Background})`

}
class Footer extends Component {
    render () {
        return (
            <footer>
            	
	            <div className="section">

						<div className="row justify-content-right" className="logoFooter">

							<div className="col-lg-3">
								<img alt="logo" src={require("../../images/logo.png")} className="img-fluid" />
							</div>
							
							<div className="col-lg-9"></div>

									
					    </div>

						<div className="row" style={footerStyle}>
							<div className="content">
								
								<div className="row">
									<div className='col-lg-3'>
										<ul className="left">	
											<h4>Activities</h4>
											
											<h4>Events</h4>

											<h4>Careers</h4>				
										</ul>
									</div>
								</div>
								
								<div className="row">
									<div className="col-lg-7"></div>

									<div className="col-lg-3">
										<ul className="right">	

											<h4>Donate</h4>
											
											<h4>Our Story</h4>	

											<h4>Contact Us</h4>			
										</ul>
									</div>	
								</div>	

							</div>	
						</div>	

					
				</div>	

				<div className="row boxesContainer">	
					<Boxes />
					<Boxes />
				</div>	
                
             
            </footer>
        );
    }
}
export default Footer;

 
 