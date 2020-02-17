import React, { Component } from "react";
import { useHistory, withRouter,Link } from "react-router-dom";
import './home.css';
import Navigation  from './Nav.js';
import {createBrowserHistory} from 'history';

var body;
let token="";

class Login extends Component{
  constructor(props) {
    super(props);
    this.state={
      name : '',
      pswd: ''
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  validateForm() {
    return this.state.name.length > 0 && this.state.pswd.length > 5;
  }

  handleNameChange=event=>{
    this.setState({
      name : event.target.value
    });
  }

  handlePasswordChange=event=>{
    this.setState({
      pswd : event.target.value
    });
  }

  handleSubmit=event=>{
    event.preventDefault();
    //console.log(this.state)
     var body = {
      pswd : this.state.pswd,
      name : this.state.name,
    }
    //console.log(body);
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
    .then(response => {if(response.redirected){
      this.props.history.push("/Home1");
      
      //window.location.href="/main";
    }
    else if(response.ok){
    alert("Invalid Credentials")
    }
 })
  }
}

    render() {
        return (<div className="bg">

<Navigation/>
            <br></br><br/>
            <br/>

            <div className="auth-wrapper">
            <div className="auth-inner">
               
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="name" id="examplename" className="form-control" placeholder="Enter Username"
                    onChange = {this.handleNameChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="pswd" id="examplePassword" className="form-control" placeholder="Enter password" 
                    onChange = {this.handlePasswordChange}/>
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
            <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            </div>
        );
    }
}
export default withRouter(Login);