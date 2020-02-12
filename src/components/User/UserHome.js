import React, { Component } from "react";
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

            <div class="wrapper">
                <Nav/>
                <div class="main_content">
                    <center>
                    <div class="header">Home Page</div>  
                    <div class="info"></div>
                    </center>
                     
                    
                    </div>
            
          </div>  
        );
}
}