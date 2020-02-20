import React, { Component } from 'react';
import driverimage from './images/car-compact.png';
import poolerimage from './images/call-taxi.png';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Link,Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from './home/Nav1';



const style = {
  height: 100,
  width: 100,
  margin: 20,
  paddingTop: 15,
  textAlign: 'center',
  display: 'inline-block',
};

class Home1 extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      loading: true,
     
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);

  }
  render() {
    if(this.state.loggedIn === false){
        return <Redirect to = '/login'/>
    }
    const loadpage = [<MuiThemeProvider><CircularProgress/></MuiThemeProvider>]
    const { loading } = this.state;

    if(loading) {
      return (<div className="App-loading">{loadpage}</div>); // render null when app is not ready
    }

    return (
      <MuiThemeProvider>
      <div className="App">
      <Navbar/>
        <div><br/><br/><br/><br/><br/>
          <h1>What are you looking for?</h1>
        </div>
        <div>
          <ul role="nav">
          <Paper style={style} zDepth={2} circle={true} >
          <Link to="/pooler"><img src={driverimage} alt="logo" /></Link>
          </Paper>
          <Paper style={style} zDepth={2} circle={true} >
          <Link to="/driver"><img src={poolerimage} alt="logo" align="center"/></Link>
          </Paper>
          <p/>
          </ul>
       </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Home1;
