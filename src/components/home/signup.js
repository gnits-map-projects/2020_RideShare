

import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import '../../home.css';
import Nav from './Nav.js';

var body;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);

    //
  
    this.state = {
      name: "",
      email:"",
      password: "",
      //confirmPassword: ""
      
    };

  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 5 && this.state.password == this.state.confirmPassword;
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  }

  handleMobileChange = event => {
    this.setState({
      mobile: event.target.value
    });
  }



  handleSubmit(event) {
    event.preventDefault();
    body = {
      Name: this.state.name,
      Password: this.state.password,
      Email: this.state.email,
      Mobile: this.state.mobile,
     //confirmPassword: this.state.confirmPassword,
    }
    console.log(body);

  const url = "http://localhost:9000/register";
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('GET','POST');
 
    fetch(url, {
       headers:headers,
       method: 'POST',
       body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(contents => {console.log(contents);
                      
 })
 .catch(()=> console.log("can't access" + url + "response. "))
//  return (
//   <Router>
//  <Route  exact path='/login' component={Loginpage}/>
//  </Router>
//  )
  }

    render() {
        return (<div>
            
            <Nav/>

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
                    <label>Name</label>
                    <input type="name"
                name="name"
                id="examplename"
                className="form-control"
                placeholder="Enter name"
                
                value = {this.state.name} 
                                    onChange = {this.handleNameChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                name="email"
                id="exampleEmail"
                className="form-control"
                placeholder="mygmail@gmail.com"
               
                value = {this.state.email} 
                                    onChange = {this.handleEmailChange} />
                </div>

                <div className="form-group">
                    <label>Mobile</label>
                    <input type="phone" name="mobile" className="form-control" id="examplePhone" 
                    placeholder="Enter mobile number"
                    value = {this.state.mobile}
                    onChange = {this.handleMobileChange} />
                </div>

                

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                className="form-control"
                
                value = {this.state.password} 
                                    onChange = {this.handlePasswordChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick = {this.handleSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/Login">Login?</a>
                </p>
            </form>
            </div>
            </div></div>
        );
    }
}