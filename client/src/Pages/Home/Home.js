//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";

//This is for google auth
import {Redirect} from 'react-router-dom';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
       name:'',
       redirect: false,
   };
}

componentDidMount() {
     let data = JSON.parse(sessionStorage.getItem('userData'));
     console.log(data);
     this.setState({name: data.userData.name})
}


render() {

  if(!sessionStorage.getItem('userData') || this.state.redirect){
    return (<Redirect to={'/'}/>)
}

   const imagesetting = {
    "width" : "100%",
    "marginTop" : "100px",
    "height" : "100%"
    }

   const jumbotronsetting = {
      "backgroundColor" : "white"
    }
  
  return (
    <div>
      <Navbar/>
      
      <img  alt="image1" src={require("../../images/img1.jpg")} style={imagesetting}/>
      <Grid/>
      <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
        <div className="container">
          <h2 className="display-4">Connecting People.Improving Lives.</h2><hr/>
          <p className="lead">Youtism is a non-profit organization that exists to educate and connect
           individuals and families to answers that matter: information and resources that help them make more informed decisions, 
           build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.</p>
        </div>
       </div>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="<display-1></display-1>">We care for you</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>

    

        <div className="col-8 jobDetailSide">
              <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
                 <div className="container">
                    <h2 className="display-4">Connecting People.Improving Skills.</h2><hr/>
                    <p className="lead">Youtism was founded  by a group of parents who realized there was a lack of support and programs available in the Northland and surrounding communities. 
                    With the help of founder Jamie Krisman, they decided to make a difference and created Autism Works. 
                    Our organization works closely with families and the local community to increase autism awareness and develop programs for individuals with Autism Spectrum Disorders.

Subscribe to our newsletter to stay up to date on programs, support groups and workshops. There’s always something great happening at Autism Works!</p>
                 </div>
              </div>
        </div>

          

       <Footer/>
    </div>
   );
 }
}
export default Home;