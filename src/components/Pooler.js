// modules/Pooler.js
import React, { Component } from 'react';
import logo from './images/logo.svg';
import Header from './HeaderComponent';
import Form1 from './Form1';

class Pooler extends Component{

    constructor(props){
      super(props);
      this.state={
        origin:"",
        destination:""
      };

    }

    render() {
    return (
      <div className="App">
          <Header/>
          <br/><br/>
          <h2>Create A Ride</h2>
        <div>
        <Form1 />
      
       </div>
      </div>
    );
  }
}

export default Pooler;
