import React, {Component} from 'react';
import "./Footer.css";
import Boxes from "../Boxes/Box.js";
import Background from "../../images/footer7.png";

class Footer extends Component {
    render () {
        return (
            <footer>
            	
	            <div className="section footerStyle" >
	            	<div className="row space"><div className="col-12"></div></div> 

						<div className="row logoFooter">
							<div className="footer-display">
									
								<div className='col-lg-3 col-md-3 col-sm-4 leftColumn'>
									<ul className="left">	
										<br/>					
										{/* <li><a href="www.linkedin.com/in/roxana-milea" target="_blank">ROXANA MILEA   </a></li>
									    <li><a href="#" target="_blank">RUPALI MESHRAM</a></li>						 */}
									</ul>
								</div>
								
								<div className="col-lg-3 col-md-6 col-sm-6  rightColumn">
									<ul className="right">	
										<br/>
										{/* <h4>SHRADDHA BHATT</h4>
										<h4>ANITHARAJ SRIDHARAN</h4>			 */}
									</ul>
								</div>	


								<div className="col-lg-6 col-md-4 col-sm-4 offset-sm-1 logoDiv">
									<img alt="logo" src={require("../../images/logo.png")} className="footer-logo img-fluid" />
								</div>
							</div>						
					    </div>
				
						<div className="row">
							<div className="col-3"></div>
							<div className="col-6"></div>
								<div className="copyright">
									{/* <p>&copy; Bla Bla</p> */}
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
