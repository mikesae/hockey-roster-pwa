import React, {Component} from 'react';
import './App.scss';
import Roster from './roster';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {PlayerDetail} from "./PlayerDetail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import NavItem from "react-bootstrap/NavItem";

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
                <Navbar className="jumbotron-fluid border-top" fixed="bottom">
                    <NavItem>
                        <Link to="/">
                            <FontAwesomeIcon size="1x" icon={faHome}/>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/schedule">
                            <FontAwesomeIcon size="1x" icon={faCalendarAlt}/>
                        </Link>
                    </NavItem>
                </Navbar>
            </BrowserRouter>
        );
    }
}

export default App;
