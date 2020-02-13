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
      email : '',
      password : ''
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {

  event.preventDefault();
    console.log(this.state)
     var body = {
      Email : this.state.email,
      Password : this.state.password,
    }
    console.log(body);
    if(this.state.email==""){
      alert('Please enter the email')

    }
    else if(this.state.password==""){
      alert('Please enter the password')
    }
    
    else{
        const url = "http://localhost:9000/login";
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
            window.location.href="/user-home";
          }
          else if(response.ok){
            console.log("Wrong email or password")
            alert("Wrong email or password")
          }
          })
          {/*}.catch((error)=> {console.log("can't access" + url + "response. " +error )},
            alert("Wrong email or password"))*/}

          }
      
    } 

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 5;
  }

  handlePasswordChange (event) {
    this.setState({
      
      password: event.target.value

    });
    console.log(event.target.value)
  }


  handleEmailChange(event) {
    this.setState({ email: event.target.value})
    console.log(event.target.value)
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
                    <label>Email address</label>
                    <input type="text" name="email" id="exampleEmail" className="form-control" placeholder="Enter email"
                    onChange = {this.handleEmailChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" id="examplePassword" className="form-control" placeholder="Enter password" 
                    onChange = {this.handlePasswordChange}/>
                </div>

                

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                
         
             
                <p className="forgot-password text-right">
                    If not registered <a href="/sign-up">Signup?</a>
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