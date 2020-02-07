import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import './styles.css'

function Login(props){
    const routeChange = () => {
       //let path = '/UseHome';
       //let history = useHistory();
      props.history.push('/user-home');
   }
    //render() {
        return (<div className="bg">
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
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={routeChange}>Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                
         
             
                <p className="forgot-password text-right">
                    If not registered <a href="/sign-up">Signup?</a>
                </p>
            
        

            </form>
            </div>
            </div>
            </div>
        );
    }
//}
export default withRouter(Login);