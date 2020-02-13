import React, { Component } from "react";
import logo from '../images/userhome.jpg';
import '../images/bgimage.css';
import './UserHome.css'
import Nav from './nav.js';
//import SignUp from "../components/signup.component";
//import User from "./components/user"
/*function Login(prop){
    const onSubmit =() => {
        
        prop.history.push('/User');
    }*/
    export default class UserHome extends Component{
    render() {
        return (

            <div className = "userhomebg">
                <div className="wrapper">
                    <Nav/>             
                    <div className="main_content">
                        <div className="header">Home Page</div>                         
                    </div>                      
                </div>      
                <div style={{'background-image' : 'url(' + logo +')' }} className = "auth-home" ></div>
                <p>HEllo world</p>
           </div>                  
        );
}
}