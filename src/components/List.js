import React, { Component } from 'react';
import Header from './HeaderComponent';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './home/Nav1';
import { mockComponent } from 'react-dom/test-utils';

var obj;
const style = {
  height: 50,
  width: 150,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

const cardStyle = {
  margin:20,
  marginRight:50,
  textAlign: 'left',
  align: 'center',
  padding: '20px',
  chip: {
    margin: 10,
  },
};

const buttonStyle ={
  marginLeft : 20,
}

class List extends Component {
  constructor(props){
  super(props);
  this.state={
    data:[],
    open: false,
    
    //databaseType : this.props.databaseType,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    window.location.href="/listofDet";
  }
  componentDidMount = () => {
    var body = {
      src    : sessionStorage.getItem("src"),
      dest   : sessionStorage.getItem("dest"),
      
      }
    const url = "http://localhost:9000/find";
      
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
      }).then(response=>{
        
          return response.json();
         // console.log(r[0])
          // sessionStorage.setItem("data",JSON)
          // window.location.href="/list";
  
        
      }).then(res=>{
        this.setState({
          data : res
        })
        });
  


     
 
 }

  render() {
   
    //var listItems = this.state.name;
    //let dataWithKeys = Object.keys(this.state.name).map((key) => {
       //var obj = this.state.name[key];
       //obj._key = key;
       //return obj;
    //});
    //console.log(dataWithKeys);
     let d=this.state.data;
    const listItems = d.map((list,index) =>
      <MuiThemeProvider>
        <Card style={cardStyle}>
          <CardHeader
            title={list.name}
            avatar=""
          />
          <CardText>
            <CardTitle title="Origin" subtitle={list.src} />
            <CardTitle title="Destination" subtitle={list.dest}/>
            <CardTitle title="Contcact number" subtitle={list.phoneNumber}/>
          </CardText>
          <Paper style={style} zDepth={1}>
          <p>{list.rdate}</p>
          </Paper>
          <Paper style={style} zDepth={1}>
          <p> {list.rtime}</p>
          </Paper>
          <Paper style={style} zDepth={1}>
          <p> vacancy:4</p>
          </Paper>
          <Paper style={style} zDepth={1}>
  <p>{list.rollno}</p>
          {/*<p>{list.date}  {list.time}</p>*/}
          </Paper>
          {/* list.dateReturn ? (<p>
              <Divider />
              <Chip style={cardStyle.chip}>This ride has returning</Chip>
              <Paper style={style} zDepth={1}>
                <p>{list.dateReturn}  {list.timeReturn}</p>
              </Paper>
          </p>) : (<p/>)*/}
          <CardActions>
            <RaisedButton label="Click to know the details!" style={buttonStyle} onClick={this.handleClick}/>
          </CardActions>
        </Card>

      </MuiThemeProvider>
    )
      
    return (
      <div className="App">
        <Navbar/>
        <div>
          <h1>List</h1>
          <ul role="nav">
          {listItems}
          </ul>
       </div>
      </div>
    );
  }
}

export default List;

/*let s=this.state.s
        let n
        return s.map((song,index) => {
           let i='/productimages/'+song[4]
           console.log(i,typeof(i))
           let a="nprice-"+index
            return (
                <tr id={index}>
                    
                    <td >{song[1]}</td>
                    <td >{song[3]}</td>
                    {/* <td >{song.quant}</td>
                    <td >{song.quality}</td> *///}
                   /* <td><img src={window.location.origin + i}/></td>
                    
                    <td contentEditable="true" id={a} width="100px"></td>
                    <td><button onClick={() => this.fetchDetails(index)} > Validate </button></td>
                     </tr>
            );
        });  */
        