import React, { Component } from 'react';
import './Form1.css'

class Form2 extends Component{
    constructor(props){
        super(props);
        this.state={
              sname : "",
              dname : "",
              

        }
        this.snameChange = this.snameChange.bind(this);
        this.dnameChange = this.dnameChange.bind(this);
        
       this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    snameChange = event =>{
        this.setState({
            sname : event.target.value
        });
    }

    dnameChange = event =>{
        this.setState({
            dname : event.target.value
        });
    }


    handleSubmit = event =>{
        event.preventDefault();
       console.log(this.state);
    }
    
    render(){
        return(
            <div class="container1">
            <div class="row">
                    <div class="col-25">
                      <label for="sname">Source</label>
                    </div>
                    <div class="col-75">
                      <input type="text" id="sname" name="sname" placeholder="Enter Source" value={this.state.sname} onChange={this.snameChange} required/>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-25">
                      <label for="dname">Destination</label>
                    </div>
                    <div class="col-75">
                      <input type="text" id="dname" name="dname" placeholder="Enter Destination" value={this.state.dname} onChange={this.dnameChange} required/>
                    </div>
                    </div>
                  
                 
                <br/>
                
               
                   
               <center>
                <div class="row"><center>
                    <button type="submit" class="submit" onClick={this.handleSubmit.bind(this)} value="Submit">Submit</button></center>
                  </div>
                  </center>
                </div>
        

        );
    }
}
export default Form2;