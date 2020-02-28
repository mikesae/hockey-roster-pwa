import React, {Component} from 'react';
import './App.scss';
import Roster from './roster';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {
    render() {
        return (
            <>
                <Navbar className="jumbotron jumbotron-fluid" sticky="top">
                    <Navbar.Brand href="#home">
                        <Image thumbnail fluid src="shen-hockey-logo.png" className="d-inline-block"/>{' '}
                        <span>2019-20 Shen Varsity Hockey</span>
                    </Navbar.Brand>
                </Navbar>
                <Container className="App container-fluid">
                    <Roster/>
                </Container>
            </>
        );
    }
}

export default App;
