import React, {Component} from 'react';
import './App.scss';
import Roster from './roster';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {PlayerDetail} from "./PlayerDetail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import NavItem from "react-bootstrap/NavItem";
import {faThList} from "@fortawesome/free-solid-svg-icons/faThList";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar className="jumbotron-fluid border-bottom navbar-top" sticky="top">
                    <span className="navbar-content">
                        <Link to="/">
                            <Image thumbnail fluid src="shen-hockey-logo.png" className="d-inline-block"/>
                            <span>2019-20 Shen Hockey</span>
                        </Link>
                    </span>
                </Navbar>
                <Switch>
                    <Route path="/schedule">
                        <Container className="App container-fluid">
                            <h4>Schedule TBD</h4>
                        </Container>
                    </Route>
                    <Route path="/player/:number" component={PlayerDetail}/>
                    <Route path="/" component={Roster}/>
                </Switch>
                <Navbar className="jumbotron-fluid border-top justify-content-center navbar-bottom" fixed="bottom">
                    <NavItem className="text-center">
                        <Link to="/">
                            <FontAwesomeIcon className="link-icon" icon={faThList}/>
                            <div className="icon-label">Roster</div>
                        </Link>
                    </NavItem>
                    <NavItem className="text-center">
                        <Link to="schedule">
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
