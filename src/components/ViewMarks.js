import  React, {Component} from 'react';
import axios from 'axios'
import MarksTableRow from './MarksTableRow';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";

import logo from '../logo.png';
import profile from '../profile.png';
import Footer from './footernew'
import './css/LandingPage.css';
import './css/profile.css';
import Heder from './header';


export default  class ViewMarks extends  Component{


    constructor(props) {
        super(props);
        this.state = {marks : []};
        this.state.Username = this.props.match.params.id;
    }

   

    componentDidMount() {
        alert('Username is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/campus/getmark/'+this.props.match.params.id)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({marks : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.marks.map(function (object, i){
            return <MarksTableRow obj = {object} key = {i}/>;
        });
    }

    render() {
        return(
                <div className='wrap'>
                   

                    <Heder/>
                    

                    <br/>

                    <h2 style={{textAlign:'center'}}>Your Results</h2>
                     <br/>

                    <table className="table table-striped" style = {{marginTop :20}}>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Year</th>
                        <th>Term</th>
                        <th>Grade</th>
                        <th>Subject</th>
                        <th>marks</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
                <br/>
                <div className='access'>
                    <Link to={""} className="btn btn-outline-primary" style={{marginRight:10}}>Goto LMS</Link>
                    <Link to={""} className="btn btn-outline-secondary" style={{marginRight:10}}>Student Library</Link>
                    <Link to={""} className="btn btn-outline-success" style={{marginRight:10}}>Events</Link>
                    <Link to={""} className="btn btn-outline-danger" style={{marginRight:10}}>Exams</Link>
                    <Link to={"/index/"+this.props.match.params.id} className="btn btn-outline-dark" style={{marginRight:10}}>Profile</Link>
                </div>
                <div>
                    <hr className="shadow-lg card-footer"/>
                </div>

               
                
                <Footer/>
             </div>
        );
    }
}