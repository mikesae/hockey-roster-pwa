import React, {Component} from 'react';
import './App.scss';
import Roster from './roster';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import {PlayerDetail} from "./PlayerDetail";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar className="jumbotron jumbotron-fluid" sticky="top">
                    <Nav.Item>
                        <Link to="/">
                            <Image thumbnail fluid src="shen-hockey-logo.png" className="d-inline-block"/>
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/schedule">Schedule</Link>
                    </Nav.Item>
                </Navbar>
                <Switch>
                    <Route path="/schedule">
                        <Container className="App container-fluid">
                            <h4>Schedule goes here</h4>
                        </Container>
                    </Route>
                    <Route path="/player/:number" component={PlayerDetail}/>
                    <Route path="/" component={Roster}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
