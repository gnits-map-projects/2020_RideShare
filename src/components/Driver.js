
import React, { Component } from 'react';
import Form2 from './Form2';
import Header from './HeaderComponent';
import Navbar from './home/Nav1';
const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
    margin: '0 auto',
  },
};

class Driver extends Component{
    constructor(props) {
      super(props);
    }

    render() {
    return (
      <div className="App">
        <Navbar/><br/><br/><br/><br/><br/>
        <h1>Find A Ride</h1>
        <div>
        <Form2/> 
       </div>
      </div>
    );
  }
}

export default Driver;
