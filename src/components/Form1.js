import React, { Component } from 'react';
import './Form1.css'
import TimePicker from 'react-timekeeper';



class Form1 extends Component{
    constructor(props){
        super(props);
        this.state={
              sname : "",
              dname : "",
              date : "",
              time : "10:00 pm",

        }
        this.snameChange = this.snameChange.bind(this);
        this.dnameChange = this.dnameChange.bind(this);
        this.dateChange = this.dateChange.bind(this);
       this.timeChange = this.timeChange.bind(this);
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

    dateChange = event =>{
        this.setState({
            date : event.target.value
        });
    }
   
    timeChange = time => {this.setState({ time })
    console.log(this.state.time.formatted12)
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
                  
                  <div class="row">
                  <div class="col-25">
                   <label for="date">Enter Date</label>
                  </div>
                <div class="col-75">
                  <input type="date" name="date" value={this.state.date} onChange={this.dateChange} required/>
                </div>
                </div>
                <br/>
                <div class="row">
                  <div class="col-25">
                   <label for="time">Select Time</label>
                  </div>
                  <div class="col-75">
                     
                      <span class="boxer" >{this.state.time.formatted12}</span>
                
                </div>
                </div>
                <div class="timep">
                <TimePicker
                    onChange={this.timeChange}
                    value={this.state.time}
                   />
                   </div>
                   <br/>
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
export default Form1;