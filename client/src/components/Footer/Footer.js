import React, {Component} from 'react';
import "./Footer.css";
import Boxes from "../Boxes/Box.js";
import Background from "../../images/footer7.png";

var footerStyle = {
  width: "100%",
  height: "220px",
  backgroundImage: `url(${Background})` 

}
class Footer extends Component {
    render () {
        return (
            <footer>
            	
	            <div className="section" style={footerStyle}>
	            	<div className="row space"><div className="col-12"></div></div> 

						<div className="row logoFooter">
							<div className="footer-display">
									
								<div className='col-lg-3'>
									<ul className="left">	
										<br/>					
										<h4>ROXANA MILEA   </h4>
									    <h4>RUPALI MESHRAM</h4>						
									</ul>
								</div>
								
								<div className="col-lg-3">
									<ul className="right">	
										<br/>
										<h4>SHRADDHA BHATT</h4>
										<h4>ANITHARAJ SRIDHARAN</h4>			
									</ul>
								</div>	


								<div className="col-lg-6">
									<img alt="logo" src={require("../../images/logo.png")} className="footer-logo img-fluid" />
								</div>
							</div>						
					    </div>
				
						<div className="row">
							<div className="col-3"></div>
							<div className="col-6"></div>
								<div className="copyright">
									<p>&copy; Bla Bla</p>
								</div>	
							<div className="col-3"></div>
						</div>		
					
				</div>	
				

				<div className="row boxesContainer">	
					<div className="col-12">
						<Boxes />
						<Boxes />
					</div>
				</div>	
                
             	
            </footer>
        );
    }
}
export default Footer;

 
 