import React, { Component } from "react";
import logo from './home.jpeg'
import './home.css'
import { useHistory, withRouter,Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (<div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
             {/* <Link className="navbar-brand" to={"/Login"}>Know</Link> */}
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02"> 
              <div className="navbar-nav mr-auto">
          <Link className="nav-link" ><b>CITIZENS ENGAGE</b></Link>
          </div>
                <ul className="navbar-nav ml-auto">
    
                <li className="nav-item">
                    <Link className="nav-link" to={"/Home"}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
            <div className="auth-wrapper">
    
            <h1 style={{'background-image' : 'url(' + logo +')' }} className = "auth-home" ></h1>
            </div>
            </div>
        );
    }
}