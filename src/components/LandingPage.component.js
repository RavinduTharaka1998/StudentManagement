import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Image, Nav, Navbar, Row} from "react-bootstrap";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import logo from '../logo.png';
import Footer from './footer'
import './css/LandingPage.css';


class LandingPage extends Component{

    render() {
        return(
            <div class = "wrap">
                    <Navbar>
                        <Navbar.Brand>
                            <img
                                alt=""
                                src={logo}
                                width="200"
                                height="120"
                            />
                            <h2 className="d-xl-inline" >University of Information Technology</h2>
                        </Navbar.Brand>
                        <img src = "https://img.freepik.com/free-vector/flat-design-minimal-technology-twitch-banner_23-2149173938.jpg" height="100"/>
                        <img src = "https://img.freepik.com/free-vector/flat-design-minimalistic-technology-twitch-banner_23-2149107142.jpg" height="100"/>
                        <img src = "https://img.freepik.com/free-vector/gradient-halftone-technology-twitch-banner_23-2149164513.jpg?w=360" height="100"/>
                    </Navbar>

                    <nav className="navbar navbar-expand-lg navbar-light bg-info ">
                        <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                            <ul className="navbar-nav mr-auto font-weight-bold form-control-lg text-dark ">

                                <li className="nav-item">
                                    <Link to={'/'} className = "nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className = "nav-link ">New Student</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/aboutUs'} className = "nav-link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/aboutUs'} className = "nav-link">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/aboutUs'} className = "nav-link"></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/signIn'} className = "nav-link">Sign In</Link>
                                </li>

                            </ul>
                        </div>
                        <Form inline >
                        <div class="form-group">
                            <input class="form-control input-sm mr-1"  type="text" placeholder='search here....'/>
                            <Button type="submit" className='btn btn-info btn-sm'>search</Button>
                        </div>
                            
                        </Form>
                    </nav>

                    <br/>

                <div className='slide'>
                    
                    <Carousel className="w-80">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://wallpapers.com/images/hd/computer-lab-classroom-p6mewus4fovbhhsu.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>our Computer Labs</h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.qs.com/wp-content/uploads/2018/10/iStock-818087490-e1538744444821.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Our Students</h3>
                            <p>.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg?cs=srgb&dl=pexels-asim-alnamat-556195.jpg&fm=jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Our University</h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <br/><br/>
                <div className='aim'>
                    <h1>Our Aim & Background...</h1>
                    <p>UoIT Campus is an established and accredited private institution since 1987 recognized by the 
                        UGC council of Sri Lanka for offering international degree foundation, undergraduate and postgraduate programs to both school-leavers and adult learners. As a leading private educational establishment, 
                    UoIT Campus prides providing both pedagogy and andragogy based training methodology. In order to realize the above goals, it is crucial for universities to revamp their back-office IT to rewire and reimagine transformation toward a Modern Campus. For example, if you plan to launch a new program, how do you optimize your risk without clear visibility of the potential class size? If you want to deliver a convocation remotely, like during the ongoing pandemic for example, 
                    how can you ensure the quality of experience lives up to your students expectations?
                    Cloud transformation can provide answers to these questions, and more.if 
                    you are running on a heavily customized legacy system (e.g. Oracle PeopleSoft), it is natural
                    to pause before embarking on a transformation journey. Keeping such constraints in mind, we at Wiprs 
                    Higher Education team have drawn upon our experiences of working with universities over the years. Looking at 
                    the best of technology on offer right now, we have identified achievable milestones to prepare you to traverse this new landscape, optimizing risk for the short-to-medium term, while building a 
                    foundation to meet your long-term objectives.</p>
                </div>
                
                <br/><br/>
                <div className='top-footer'>
                    <img src = "https://media.istockphoto.com/id/1165524880/photo/happy-diverse-students-walking-in-college-campus.jpg?s=612x612&w=0&k=20&c=5Ag5hy-eDDg0jifu0tQ10uVA0DA9MRnUZ9520wwd9ck=" width="400"/>
                    <img src = "https://www.cinec.edu/wp-content/uploads/2016/11/cinec-malabe-01-mobile.jpg" width="475"/>
                    <img src = "https://sdticampus.lk/wp-content/uploads/2022/08/6L3A0872.jpg" width="" height=""/>
                </div>

                <div>
                    <hr className="shadow-lg card-footer"/>
                </div>
                <Footer/>

            </div>
        );
    }
}

export default LandingPage;