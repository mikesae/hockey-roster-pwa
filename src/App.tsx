import React, {Component} from 'react';
import './App.scss';
import Roster from './roster';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Route, Switch} from 'react-router-dom';
import {PlayerDetail} from "./PlayerDetail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import NavItem from "react-bootstrap/NavItem";
import {faThList} from "@fortawesome/free-solid-svg-icons/faThList";
import {Schedule} from "./Schedule";
import {BrowserRouter} from "react-router-dom";
import {TopNavbar} from "./TopNavbar";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <TopNavbar showBackNav={false}/>
                <Switch>
                    <Route exact path="/schedule" component={Schedule}/>
                    <Route path="/player/:number" component={PlayerDetail}/>
                    <Route exact path="/" component={Roster}/>
                </Switch>
                <Navbar className="jumbotron-fluid border-top justify-content-center navbar-bottom" fixed="bottom">
                    <NavItem className="text-center">
                        <Link to="/">
                            <FontAwesomeIcon className="link-icon" icon={faThList}/>
                            <div className="icon-label">Roster</div>
                        </Link>
                    </NavItem>
                    <NavItem className="text-center">
                        <Link to="/schedule">
                            <FontAwesomeIcon className="link-icon" icon={faCalendarAlt}/>
                            <div className="icon-label">Schedule</div>
                        </Link>
                    </NavItem>
                </Navbar>
            </BrowserRouter>
        );
    }
}

export default App;