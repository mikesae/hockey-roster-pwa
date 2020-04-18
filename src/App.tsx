import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import Roster from './roster';
import Credits from './credits';
import Schedule from './Schedule';
import Standings from './Standings';
import { PlayerDetail } from './PlayerDetail';
import PlayerStatSheet from './PlayerStatSheet';
import GoalieStatSheet from './GoalieStatSheet';
import './transitions.scss';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route
                    render={({location}) => (
                        <ReactCSSTransitionReplace
                            transitionName="cross-fade"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}
                        >
                            <div key={location.pathname}>
                                <Switch location={location}>
                                    <Route path="/" exact component={Roster}/>
                                    <Route path="/Credits" component={Credits}/>
                                    <Route path="/Schedule" component={Schedule}/>
                                    <Route path="/Standings" component={Standings}/>
                                    <Route path="/player/:number" component={PlayerDetail}/>
                                    <Route path="/player-stat-sheet/:playerId" component={PlayerStatSheet}/>
                                    <Route path="/goalie-stat-sheet/:playerId" component={GoalieStatSheet}/>
                                </Switch>
                            </div>
                        </ReactCSSTransitionReplace>
                    )}
                />
                <BottomNavbar/>
            </BrowserRouter>
        );
    }
}