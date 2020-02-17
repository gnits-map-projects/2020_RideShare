import React ,{ Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './home.css';
//import './App.css';
import { BrowserRouter as Router, 
  Switch, 
  Route,
   Link } from "react-router-dom";
   import {
    Navbar,
    Nav,
    Form,
    FormControl,
    NavDropdown,
    Button,
    Image
  } from 'react-bootstrap'

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
      
<Navbar bg="#1565c0" expand="md">
      
      <Navbar.Brand href="#home"><h2><b>RIDE SHARE</b></h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="mr-auto"></Nav>
          <Nav>
          <Nav.Link href="/Home">HOME</Nav.Link>
          <Nav.Link href="/Login">LOGIN</Nav.Link>
          <Nav.Link href="/Signup">SIGN UP</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav>
       
      </Navbar.Collapse>
    </Navbar>      
</div>
         
        
  );
}}

export default Navigation;