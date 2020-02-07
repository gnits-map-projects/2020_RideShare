import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import './styles.css'

export default class SignUp extends Component {
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

            <br></br><br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/Login">Login?</a>
                </p>
            </form>
            </div>
            </div></div>
        );
    }
}