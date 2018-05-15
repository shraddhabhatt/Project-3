import React from "react";
import {Navbar, Nav, MenuItem, NavItem, NavDropdown} from "react-bootstrap";

export const Navtrial = props => (
  <Navbar inverse collapseOnSelect>
		  <Navbar.Header>
		   
			    <Navbar.Brand>
			      	<img className="navbar-brand" alt="logo" src={require("../../images/logo.png")}/>
			    </Navbar.Brand>
			   
			    <Navbar.Toggle />
		  
		  </Navbar.Header>

	  <Navbar.Collapse>
		    <Nav pullRight>

		      <NavItem eventKey={1}>
		        <a href="/Events">EVENTS</a>
		      </NavItem>
		      <NavItem eventKey={2} href="#">
		        <a href="/Activities">ACTIVITIES</a>
		      </NavItem>

		      <NavItem eventKey={3} href="#">
		        <a href="/Career">CAREERS</a>
		      </NavItem>
		      
		      <NavItem eventKey={4} href="#">
		        <a href="/">HOME</a>
		      </NavItem>
		      

		    </Nav>
	  </Navbar.Collapse>
</Navbar>
);

