
import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import './home.css';
import Navigation from './Nav.js';

var body;
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validRollRegex = RegExp(/^1[6-9]251A((12)|(17)|(02)|(04)|(05))([0-9]{2}|([A-I]{1}[0-9]{1}))$/);
const validMobileRegex = RegExp(/^[6-9]{1}[0-9]{9}$/);

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleRollnoChange = this.handleRollnoChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  
    this.state = {

      r:false,
      n:false,
      e:false,
      p:false,
      ph:false,
      g:false,
      a:false,
      rollno : "",
      name: "",
      email:"",
      pswd: "",
      phoneNumber:"",
      gender : "",
      age : "",
      errors: {
        name: '',
        email: '',
        password: '',
        rollno : '',
        mobile : '',
      }
     
      //confirmPassword: ""
      
    };

  }
  validateForm() {
    return this.state.name.length > 0 && this.state.pswd.length > 5 ;
  }

  handleRollnoChange  = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.rollno = 
          validRollRegex.test(value)
            ? ''
            : 'RollNo. is not valid!';
    if(errors.rollno ==  '')
    {
      this.setState({r : true});
    }
    this.setState({errors, [name]: value});
    
  }

  handleNameChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.name = 
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
    if(errors.name ==  '')
    {
          this.setState({n : true});
   }
    this.setState({errors, [name]: value});
  }

  handleEmailChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
    if(errors.email ==  '')
      {
         this.setState({e : true});
     }
    this.setState({errors, [name]: value});
  }

  handlePasswordChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.password = 
    value.length < 8
      ? 'Password must be 8 characters long!'
      : '';
    if(errors.password ==  '')
      {
        this.setState({p : true});
      }
    this.setState({errors, [name]: value});
  }

  handleMobileChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.mobile = 
    (validMobileRegex.test(value))
      ? ''
      : 'Enter a valid phone number!';
   if(errors.mobile==  '')
    {
        this.setState({ph : true});
    }
    this.setState({errors, [name]: value});
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
    
    
     var body = {
      rollno : this.state.rollno,
      name : this.state.name,
      email : this.state.email,
      phoneNumber: this.state.phoneNumber,
      pswd : this.state.pswd,
      gender : this.state.gender,
      age : this.state.age
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
    else{
    if(this.state.r == true && this.state.n == true && this.state.e == true && this.state.ph == true && this.state.p == true){
    console.log(this.state)
    const url = "http://localhost:9000/person";
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
    .then(contents => {console.log(contents);})
    .catch(()=> console.log("can't access " + url + " response. "))
    alert("Details inserted successfully!");
    this.props.history.push("/login");
  }
  else{
    alert("enter details correctly")
  }
}

  }

  
    render() {
        const {errors} = this.state;
        return (<div className ="bg">
            
            <Navigation/>

            <br></br><br/>
            <br/>
           

            <div className="auth-wrapper1">
            <div className="auth-inner">
            <form>
                <center><h3>Sign Up</h3></center>

                <div className="form-group">
                    <label>Roll Number</label>
                    <input type="text"
                       name="rollno"
                      id="exampleRollno"
                      className="form-control"
                      placeholder="Enter Roll No."
                      value = {this.state.rollno} 
                      onChange = {this.handleRollnoChange} required/>
                      <span className='error'>{errors.rollno}</span>
                </div>


                <div className="form-group">
                    <label>Name</label>
                    <input type="name"
                        name="name"
                        id="examplename"
                        className="form-control"
                        placeholder="Enter name"
                        value = {this.state.name} 
                        onChange = {this.handleNameChange} required/>
                   <span className='error'>{errors.name}</span>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        name="email"
                        id="exampleEmail"
                        className="form-control"
                        placeholder="mygmail@gmail.com"
                        value = {this.state.email} 
                        onChange = {this.handleEmailChange} required/>
                <span className='error'>{errors.email}</span>
                </div>
                
                <div className="form-group">
                    <label>Mobile</label>
                    <input type="phone" name="phoneNumber" className="form-control" id="examplePhone" 
                    placeholder="Enter mobile number"
                    value = {this.state.phoneNumber}
                    onChange = {this.handleMobileChange} required/>
                    <span className='error'>{errors.mobile}</span>
                </div>
                
                
            <div className="form-group">
                <label>Password</label>
                <input type="password"
                name="pswd"
                id="examplePassword"
                placeholder="********"
                className="form-control"
                 value = {this.state.pswd} 
                 onChange = {this.handlePasswordChange} required/>
                <span className='error'>{errors.password}</span>
                </div>


            <div className="form-group">
                    <label>Age</label>
                    <input type="number" name="age" className="form-control" id="exampleAge" 
                    placeholder="Enter Age"
                    value = {this.state.Age}
                    onChange = {this.handleAgeChange} required/>
            </div>


            <div className="form-group">
            <label> Gender <br/>
            <input
              type="radio"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleGenderChange}
            />
            &nbsp;&nbsp;Female 
          </label>&nbsp;&nbsp;
            
          <label>
            <input
              type="radio"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleGenderChange}
            />
            &nbsp;&nbsp;Male
          </label>
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