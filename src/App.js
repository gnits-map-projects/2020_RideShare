import React ,{ Component } from 'react';

import { BrowserRouter as Router, 
  Switch, 
  Route,
   Link } from "react-router-dom";
   import Login from "./components/home/login";
   import Signup from "./components/home/Signup";
   import Home from "./components/home/home";
   import Home1 from './components/Home1';
   import Driver from './components/Driver';
   import Pooler from './components/Pooler';
   import About from "./components/home/about.js";
   import List from "./components/List";
   import logout from './components/home/logout';
   import Profile from './components/Profile';
   import Updatedetalis from './components/Updatedetails';
   import Details from './components/details';
   import DisHistory from './components/DisHistory'



class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
            <Router>
                <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <Route exact path='/' component={ Home } />
            <Route exact path='/Home' component={ Home } />
            <Route path="/Login" component={ Login } />
            <Route path="/Signup" component={ Signup } />
            <Route path="/Home1" component={Home1}/>
            <Route path="/Driver" component={Driver}/>
            <Route path="/Pooler" component={Pooler}/>
            <Route path="/about" component= { About }/>
            <Route path="/logout" component= { logout }/>
            <Route path="/list" component= { List }/>
            <Route path="/profile" component= { Profile }/>
            <Route path="/update" component={Updatedetalis}/>
            <Route path="/details" component={Details}/>
            <Route path="/history" component={DisHistory}/>
            </Switch>
            </Router>
            </div>
        
  );
}}

export default App;
