import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
export const ListItem = props =>
  <li className="list-group-item">
  <Grid>
		<Row>
			<Col xs={12} md={8}>
    			<h4><strong><ins>{props.name}</ins></strong></h4>
			</Col>
			<Col xs={6} md={4}>
				<h4>{props.date}</h4>
			</Col>
		</Row>	
		<Row>
			<Col xs={12} md={9}>
    			<h4><em>{props.description}</em></h4>
			</Col>
			<Col xs={4} md={3}>
				{props.children}
			</Col>
		</Row>
		<Row>
			<Col xs={12} md={12}>
				<h4>Location: {props.address1}, {props.city}, {props.state}, {props.zipcode}</h4>
			</Col>
		</Row>
	</Grid>	
  </li>
  