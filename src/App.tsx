import React, {Component} from 'react';
import './App.scss';
import Roster from "./roster";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

class App extends Component {
    render() {
        return (
            <Container className="App container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <Image roundedCircle thumbnail src="maskable_icon.png"/>
                    <span className="title">2019-20 Shen Varsity Hockey</span>
                </div>
                <Roster/>
            </Container>
        );
    }
}

export default App;
