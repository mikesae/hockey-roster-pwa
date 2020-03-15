import React, {Component} from 'react';
import './App.scss';
import Roster from './roster';
import {Route, Switch} from 'react-router-dom';
import {PlayerDetail} from "./PlayerDetail";
import {Schedule} from "./Schedule";
import {BrowserRouter} from "react-router-dom";
import Credits from './credits';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Roster}/>
                    <Route path="/player/:number" component={PlayerDetail}/>
                    <Route path="/credits" component={Credits}/>
                    <Route exact path="/schedule" component={Schedule}/>
                </Switch>
            </BrowserRouter>
        );
    }
}