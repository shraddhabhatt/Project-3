
//imports dependencies and files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header.js";
import Grid from "../../components/Grid/Grid.js";
import Footer  from "../../components/Footer";
import "./Home.css";
import {Redirect} from 'react-router-dom';
import LogoutBtn from "../../components/Logout";
import { Carousel } from 'react-bootstrap';

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
    //  this.setState({name: data.userData.name})
}


render() {



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
      <LogoutBtn />  
      {/*image */}
      <img  alt="image1" src={require("../../images/img1.jpg")} style={imagesetting}/>

      {/*parallax effect*/}
      <Grid/>

    {/*about youtism*/}
      <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
        <div className="container">
          <h2 className="display-4">Connecting People. Improving Lives.</h2><hr/>
          <p className="lead">Youtism is a non-profit organization that exists to educate and connect
           individuals and families to answers that matter: information and resources that help them make more informed decisions, 
           build and strengthen relationships, and more importantly, thrive. Together, we’ll help you connect the pieces.</p>
        </div>
       </div>

        {/* 4 images jumbotron */}
        <div className="jumbotron jumbotron-fluid homejumboforimage" >
          <div className="row">
            <div className="container">

               {/*image 1*/}
              <div className="col-lg-6">
                <div className="card">
                  <img className="card-img-top img-responsive" src={require("../../images/h1.png")} alt="Card image cap" />
              </div>  
            </div>

            {/*image 2*/}
            <div className="col-lg-6">
              <div className="card ">
                <img className="card-img-top img-responsive" src={require("../../images/h2.jpg")} alt="Card image cap" />
              </div>  
            </div>
          </div>  {/*row end*/}

        {/*next row for image*/}
       <div className="container">
        <div className="row">
          <div className="container">

            {/*image3*/}
            <div className="col-lg-6">
              <div className="card">
                  <img className="card-img-top img-responsive" src={require("../../images/h3.jpg")} alt="Card image cap" />
              </div>  
            </div>

            {/*image4*/}
            <div className="col-lg-6">
              <div className="card">
                <img className="card-img-top img-responsive" src={require("../../images/h4.jpg")} alt="Card image cap" />
              </div>  
            </div>

          </div>  
        </div> 
      </div>
      </div>{/*row end*/}
    </div> {/*jumbotron end*/} 



     {/*carousal*/}
    <Carousel>
      <Carousel.Item>
        <img className="slidesetting" alt="900x500" src={require("../../images/act3.png")} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="slidesetting" alt="900x500" src={require("../../images/s2.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="slidesetting" alt="900x500" src={require("../../images/s3.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="slidesetting" alt="900x500" src={require("../../images/s6.png")} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="slidesetting" alt="900x500" src={require("../../images/s5.jpg")} />
      </Carousel.Item>
      </Carousel>
      
      {/*about us youtism*/}
      <div className="col-8 jobDetailSide">
              <div className="jumbotron jumbotron-fluid" style={jumbotronsetting}>
                 <div className="container">
                    <h2 className="display-4">Connecting People. Improving Skills.</h2><hr/>
                    <p className="lead">Youtism was founded  by a group of devlopers who realized there was a lack of support and programs available in Portsmouth, NH and surrounding communities. 
                    We have decided to make a difference and created You+ism. 
                    Our organization works closely with families and the local community to increase autism awareness and develop programs for individuals with Autism Spectrum Disorders.

                    Subscribe to our newsletter to stay up to date on events and job postings. There’s always something great happening in the applications we develop for children and at the events organized in the surrounding area!</p>
                 </div>
              </div>
        </div>
      {/*footer*/}
      <Footer/>
    </div>
    );
  }
}

export default Home;


