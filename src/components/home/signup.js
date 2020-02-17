

import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import './home.css';
import Navigation from './Nav.js';

var body;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRollnoChange = this.handleRollnoChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);

    //
  
    this.state = {
      rollno : "",
      name: "",
      email:"",
      pswd: "",
      phoneNumber:"",
      gender : "",
      age : ""
      //confirmPassword: ""
      
    };

  }
  validateForm() {
    return this.state.name.length > 0 && this.state.pswd.length > 5 && this.state.password == this.state.confirmPassword;
  }

  handleRollnoChange  = event => {
    this.setState({
      rollno: event.target.value
    });
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
      pswd: event.target.value
    });
  }

  handleMobileChange = event => {
    this.setState({
      phoneNumber: event.target.value
    });
  }
  handleGenderChange(event) {
    this.setState({
      gender: event.target.value
    });
  }

  handleAgeChange(event) {
    this.setState({
      age : event.target.value
    });
  } 

  handleSubmit(event) {
    
    event.preventDefault();
    console.log(this.state)
     var body = {
      pswd : this.state.pswd,
      name : this.state.name,
      phoneNumber: this.state.phoneNumber,
      email : this.state.email,
      rollno : this.state.rollno,
      age : this.state.age,
      gender : this.state.gender
    }
    console.log(body);
    if(this.state.name==""){
      alert('Please enter the name')

    }
  else if(this.state.email==""){
    alert('Please enter the email')
}
else if(this.state.phoneNumber==""){
  alert('Please enter the phone number')
}
else if(this.state.pswd==""){
  alert('Please enter the password')
}

else if(this.state.rollno==""){
  alert('Please enter the rollno')
}

else if(this.state.age==""){
  alert('Please enter the age')
}

else if(this.state.gender==""){
  alert('Please enter the gender')
}
  /*else if(this.state.cpswd!=this.state.pswd){
      alert('confirm password does not matched')
    
      }*/
    else{
    
      console.log(this);
  /*const url = "http://localhost:9000/person";
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('POST','GET');
 
    fetch(url, {
       headers:headers,
       method: 'POST',
       body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(contents => {console.log(contents);
                      
 })
 .catch(()=> console.log("can't access " + url + " response. "))


 alert('Details are submitted successful');
   this.props.history.push("/login");
 
  }*/
}
  }

    render() {
        return (<div className ="bg">
            
            <Navigation/>

            <br></br><br/>
            <br/>
           

            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Rollno.</label>
                    <input type="text"
                       name="rollno"
                      id="exampleRollno"
                      className="form-control"
                      placeholder="Enter Roll No"
                      value = {this.state.rollno} 
                      onChange = {this.handleRollnoChange} required/>
                </div>


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
                    <input type="phone" name="phoneNumber" className="form-control" id="examplePhone" 
                    placeholder="Enter mobile number"
                    value = {this.state.phoneNumber}
                    onChange = {this.handleMobileChange} />
                </div>
                
                
            <div className="form-group">
                <label>Password</label>
                <input type="password"
                name="pswd"
                id="examplePassword"
                placeholder="********"
                className="form-control"
                 value = {this.state.pswd} 
                 onChange = {this.handlePasswordChange} />
                </div>
            <div className="form-group">
                <label> Gender <br/>
            <input
              type="radio"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleGenderChange}
            />
            Female 
          </label>&nbsp;&nbsp;
            
          <label>
            <input
              type="radio"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleGenderChange}
            />
            Male
          </label>
          </div>
         
          <div className="form-group">
                    <label>Age</label>
                    <input type="number" name="age" className="form-control" id="exampleAge" 
                    placeholder="Enter Age"
                    value = {this.state.Age}
                    onChange = {this.handleAgeChange} />
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