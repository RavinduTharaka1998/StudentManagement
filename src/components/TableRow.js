import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/campus/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
    }
    render() {
        return (


            <div className='pro-details'>
                <table className="table table-striped">
                   <tr>
                      <td>studentID</td>
                      <td>IT {this.props.obj._id}</td>
                   </tr>
                   <tr>
                      <td>full name</td>
                      <td>{this.props.obj.name}</td>
                   </tr>
                   <tr>
                      <td>address</td>
                      <td>{this.props.obj.address}</td>
                   </tr>
                   <tr>
                      <td>nic</td>
                      <td>{this.props.obj.nic}</td>
                   </tr>
                   <tr>
                      <td>phone</td>
                      <td>{this.props.obj.phone}</td>
                   </tr>
                   <tr>
                      <td>email</td>
                      <td>{this.props.obj.email}</td>
                   </tr>
                   <tr>
                      <td> <Link to={"/edit/"+this.props.obj._id} className="btn btn-success">Edit</Link></td>
                      <td><button onClick={this.deletesss} className="btn btn-danger">Delete Account</button></td>
                   </tr>
                </table>
            </div>

        //    <tr>
        //        <td>
        //            {this.props.obj._id}
        //        </td>
        //        <td>
        //            {this.props.obj.fullname}
        //        </td>
        //        <td>
        //            {this.props.obj.address}
        //        </td>
        //        <td>
        //            {this.props.obj.nic}
        //        </td>
        //        <td>
        //            {this.props.obj.phone}
        //        </td>
        //        <td>
        //            {this.props.obj.email}
        //        </td>
        //        <td>
        //            {this.props.obj.password}
        //        </td>
        //        <td>
        //            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>

        //        </td>
        //        <td>
        //            <td><button onClick={this.deletesss} className="btn btn-primary">Delete Account</button></td>

        //        </td>
        //    </tr>
        );
    }
}

export default TableRow;