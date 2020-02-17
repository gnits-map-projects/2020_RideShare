// modules/Driver.js
import React, { Component } from 'react';
//import logo from './images/logo.svg';
import FormComponent2 from './FormComponent2';
import Header from './HeaderComponent';
const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
    margin: '0 auto',
  },
};

// Get a reference to the database service
/*
var database = firebase.database();
var UCRef = database.ref("/drivers");
*/
class Driver extends Component{
    constructor(props) {
      super(props);
    }

    render() {
    return (
      <div className="App">
        <Header/>
        <h2>Find A ride</h2>
        <div>
        <FormComponent2/> 
       </div>
      </div>
    );
  }
}

export default Driver;
