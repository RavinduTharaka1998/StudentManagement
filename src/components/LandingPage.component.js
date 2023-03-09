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
                <Router>

                    <Navbar>
                        <Navbar.Brand >
                            <img
                                alt=""
                                src={logo}
                                width="200"
                                height="120"
                            />
                            <h2 className="d-xl-inline" >University of Information Technology</h2>
                        </Navbar.Brand>
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

                </Router>


                <div className='slide'>
                    
                    
                    <Carousel className="w-90">
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


                <div>
                    <hr className="shadow-lg card-footer"/>
                </div>
                <Footer/>

            </div>
        );
    }
}

export default LandingPage;