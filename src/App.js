import React ,{ Component } from 'react';
//import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, 
  Switch, 
  Route,
   Link } from "react-router-dom";
   

import Login from "./login.component";
import SignUp from "./signup.component";
import Home from "./home"
import complaint from "./complaint_registration"

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
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
</div>
         
        
  );
}}

export default App;
