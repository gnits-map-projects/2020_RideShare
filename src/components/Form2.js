import React, { Component } from 'react';
import './Form1.css'
import {Link,useHistory, withRouter} from 'react-router-dom'


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
       var body = {
       src    : this.state.sname,
       dest   : this.state.dname,
       
       }
       console.log(body);
       if(this.state.sname==""){
         alert('Please enter the source')
       }

       else if(this.state.dname==""){
         alert('Please enter the destinantion')
       }
    
       else{
         sessionStorage.setItem("src",this.state.sname);
         sessionStorage.setItem("dest",this.state.dname);
         
        console.log(this.state)
         const url = "http://localhost:9000/find";
            window.location.href="/list";
          /*let headers = new Headers();
           headers.append('Content-Type','application/json');
           headers.append('Accept','application/json');
      
            headers.append('Access-Control-Allow-origin',url);
            headers.append('Access-Control-Allow-Credentials','true');
    
            headers.append('POST','GET');
           var s = fetch(url, {
              headers:headers,
              method: 'POST',
              body: JSON.stringify(body)
            }).then(response=>{
              
                return response.json();
               // console.log(r[0])
                // sessionStorage.setItem("data",JSON)
                // window.location.href="/list";
        
              
            }).then(res=>{console.log(res[0].id)
              return res});*/
        
      
      
         
   }
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