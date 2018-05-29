import React from 'react';
import Tilt from 'react-tilt';
import LogoImage from '../../images/logo.png';

 const Logo = () => {
	return (
		<div style={{height: "20px", width: "250px", marginTop: "-9px", marginLeft: "25px"}}>
			<Tilt className="Tilt" options={{ max : 45, perspective: 8000 }} >
			    <div className="Tilt-inner"> <img style={{height: "110px", width: "250px"}} src={LogoImage} alt="logo youtism" /> </div>
			</Tilt>
        </div>
)
}

export default Logo;

