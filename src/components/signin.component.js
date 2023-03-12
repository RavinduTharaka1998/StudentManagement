import  React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";


import logo from "../logo.png";
import './css/LandingPage.css';
import Footer from './footer'


export default  class SignIn extends  Component{
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:''
        }
    }
    onChangeEmail(e){
        this.setState( {
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const Email = this.state.email;
        let object = {
            email : this.state.email,
            password : this.state.password
        };

       alert('mail '+this.state.email);
       alert('pass '+this.state.password);
        
            axios.post('http://localhost:4000/campus/login',object)
                .then(res => {
                    if(res.data.message === "Successful Login"){
                        alert(res.data.message)
                        alert(Email)
                        this.props.history.push('/index/'+Email);
                    }
                    else{
                        alert(res.data.message)
                        //window.open('/signIn')
                        this.props.history.push('/signIn');
                    }

                });

        this.setState({
            email :'',
            password :'',
            customer_type :''
        })
    }

    render() {
        return(
            <div class = "wrap">
                <Navbar>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="200"
                            height="120"

                        />{''}
                        <h2 className="d-xl-inline">University of Information Technology</h2>
                    </Navbar.Brand>
                        <img src = "https://img.freepik.com/free-vector/flat-design-minimalistic-technology-twitch-banner_23-2149107142.jpg" height="100"/>
                        <img src = "https://img.freepik.com/free-vector/gradient-halftone-technology-twitch-banner_23-2149164513.jpg?w=360" height="100"/>
                </Navbar>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
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
                                <Link to={'/signIn'} className = "nav-link">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                    <Form inline>
                                <input class="form-control input-sm mr-1"  type="text" placeholder='search here....'/>
                                <Button type="submit" className='btn btn-info btn-sm'>search</Button>
                    </Form>
                </nav>
                <br/>
                <div className="container" style={{marginTop:10, width:'30%'}}>
                    <h3 className="text-center">Sign In</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username :</label>
                            <input type ="email" className="form-control" placeholder="raone@gmail.com" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="password" className="form-control" placeholder="********" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>

                        <div className="form-group">
                            <input type = "submit" value = "Sign In" className="btn btn-info"/>
                        </div>
                    </form>
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
        )
    }
}
