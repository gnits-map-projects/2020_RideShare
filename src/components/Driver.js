
import React, { Component } from 'react';
import Form2 from './Form2';
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
        <Form2/> 
       </div>
      </div>
    );
  }
}

export default Driver;
