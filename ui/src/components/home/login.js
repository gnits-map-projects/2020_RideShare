import React, { Component } from "react";
import { useHistory, withRouter,Link, Redirect } from "react-router-dom";
import './home.css';
import Navigation  from './Nav.js';
import {createBrowserHistory} from 'history';
var body;
let token="";
const validRollRegex = RegExp(/^1[6-9]251A((12)|(17)|(02)|(04)|(05))([0-9]{2}|([A-I]{1}[0-9]{1}))$/i);
class Login extends React.Component {

  constructor(props) {
   
    super(props);
    this.state={
      
      pswd : '',
      rollno : '',
      errors: {   
        password: '',
        rollno : '',
      }
      

    }
    this.handleRollnoChange=this.handleRollnoChange.bind(this)
  this.handlePasswordChange=this.handlePasswordChange.bind(this)
  this.handleSubmit=this.handleSubmit.bind(this)
  
  }
  
  handleRollnoChange=event=>{
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.rollno = 
          validRollRegex.test(value)
            ? ''
            : 'RollNo. is not valid!';
    this.setState({errors, [name]: value});
    console.log(this.state.rollno)
    
  }

  handlePasswordChange=event=>{
    this.setState({
      pswd : event.target.value
    });
  }

  handleSubmit=event=>{
    event.preventDefault();
    console.log(this.state);
     var body = {
      pswd : this.state.pswd,
      rollno : this.state.rollno,
    }
    if(this.state.name==""){
      alert('Please enter the name')

    }
    else if(this.state.pswd==""){
      alert('Please enter the password')
  }
    else{
    const url = "http://localhost:9000/personVal";
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
    /*.then(response => response.text().then(data => ({data1:(data)}))
      .then(response => {
      console.log(response.data1)
      var obj =JSON.parse(response.data1)
      this.setState({
      rollno : obj.rollno, });
    }))*/
    .then(response => {if(response.ok){
      this.props.history.push("/Home1");
      
    }
    else {
    alert("Invalid Credentials")
    }
 })
  }
}

  render() {

       const {errors} = this.state;
        return (<div className="bg">

<Navigation/>
            <br></br><br/>
            <br/>

            <div className="auth-wrapper2" >
            <div className="auth-inner">
              <div className="set">
            <form>
                <center><h3>Login</h3></center>

                <div className="form-group">
                    <label>Roll Number</label>
                    <input type="text" name="rollno" id="examplename" className="form-control" placeholder="Enter Username"
                    onChange = {this.handleRollnoChange} value={this.state.rollno}/>
                    <span className='error'>{errors.rollno}</span>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="pswd" id="examplePassword" className="form-control" placeholder="Enter password" 
                    onChange = {this.handlePasswordChange} value={this.state.pswd}/>
                  </div>

                

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                
         
             
                <p className="forgot-password text-right">
                    If not registered <a href="/Signup">Signup?</a>
                </p>
            
        

            </form>
            </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            </div>
        );
    }
}

export default Login;
