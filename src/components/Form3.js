import React, { Component } from 'react';
import './Form1.css'
import TimePicker from 'react-timekeeper';
var r=sessionStorage.getItem("srollno")
var  name=sessionStorage.getItem("uname");
var ph,frollno,crollno;
class Form3 extends Component{
    constructor(props){
        super(props);
        this.state={
              sname : "",
              dname : "",
              date : "",
              time : "10:00 pm",
              id: ""

        }
       
        this.snameChange = this.snameChange.bind(this);
        this.dnameChange = this.dnameChange.bind(this);
        this.dateChange = this.dateChange.bind(this);
        this.timeChange = this.timeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
      
      name=sessionStorage.getItem("uname");
      ph=sessionStorage.getItem("uphone");
      crollno = sessionStorage.getItem("srollno");
      frollno = sessionStorage.getItem("srollno");
    console.log(sessionStorage.getItem("srollno"))
    console.log(sessionStorage.getItem("uname"))
    console.log(sessionStorage.getItem("uphone"))
    console.log(sessionStorage.getItem("ugender"))
    console.log(sessionStorage.getItem("uage"))
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
      //  event.preventDefault();
      //  console.log(this.state);
      event.preventDefault();
    var body = {
    rollno : crollno,
    rtime  : this.state.time.formatted24,
    src    : this.state.sname,
    dest   : this.state.dname,
    rdate  : this.state.date,
    name   : name,
    phoneNumber :ph,
    crollno :crollno,
    frollno:frollno,
    tname : name,
    vacancy : 3
    
    }
    console.log(body);
    if(this.state.sname==""){
      alert('Please enter the source')
    }
    else if(this.state.time==""){
      alert('Please enter the time')
    }
    else if(this.state.dname==""){
      alert('Please enter the destinantion')
    }
    else if(this.state.date==""){
      alert('Please enter date')
    }
    else{
        console.log(body)

        let url = "http://localhost:9000/addRide";
      
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
          }).then(response=>{if(response.ok){
             alert("ok")
            this.callId()
          }
          })
          
   
       
}
  }
  callId()
  {
    var body = {
      rollno : crollno,
      rtime  : this.state.time.formatted24,
      src    : this.state.sname,
      dest   : this.state.dname,
      rdate  : this.state.date,
      name   : name,
      phoneNumber :ph,
      crollno :crollno,
      frollno:frollno,
      tname : name,
      vacancy : 3
      
      }
   let url = "http://localhost:9000/adding";
      
   let  headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');

     headers.append('Access-Control-Allow-origin',url);
     headers.append('Access-Control-Allow-Credentials','true');

     headers.append('POST','GET');
     fetch(url, {
       headers:headers,
       method: 'POST',
       body: JSON.stringify(body)
     }).then(response=>{
         console.log(response)
         return response.text();
     }).then(res=>{
         let s=JSON.parse(res)
         console.log(s)
         this.setState({
             id:s.id
         })
         console.log(this.state.id)
     }).then(()=>{this.callMatch()})
     .catch(error=>{alert(error)});
  }
  callMatch(){
    let body = {
        rtime  : this.state.time.formatted24,
        src    : this.state.sname,
        dest   : this.state.dname,
        rdate  : this.state.date,
        cname   : name,
        phoneNumber :ph,
        crollno :crollno,
        frollno:frollno,
        tname : name,
        cid :this.state.id
        
        }
        console.log(body)
        const url = "http://localhost:9000/match";
      
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
          }) .then(response => {
            if(response.ok){
              alert("inserted");
              }
            
          })
          .catch(error=>{alert(error)});
      
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
export default Form3;