import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import GitUserDetails from "./GitUserDetails/GitUserDetails";
import GitUsers from "./GitUsers/GitUsers";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/GitUserDetails" component={GitUserDetails} />
                    <Route path="/GitUsers" component={GitUsers} />
                </Switch>
            </Router>
        )
    }
}
