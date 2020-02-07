import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";


import Login from "./login.component";
import SignUp from "./signup.component";
import Home from "./home"
import App from "./App";
import UserHome from "./UserHome"
import complaint from "./complaint_registration"


class Routing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <Router>
                <Switch>
            <Route exact path="/" component={App} />
            <Route exact path='/Home' component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/user-home" component={UserHome}/>
            <Route path="/complaint" component={complaint}/>
                </Switch>
            </Router>
            </div>
        );
    }
}

export default Routing;




