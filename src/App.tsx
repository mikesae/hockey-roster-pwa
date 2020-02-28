import React, {Component} from 'react';
import './App.scss';
import Roster from "./roster";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
    render() {
        return (
            <Container className="App container-fluid">
                <Row>
                    <Col className="col-2 px-0 my-auto">
                        <Image thumbnail src="shen-hockey-logo.png"/>
                    </Col>
                    <Col className="col-10 px-0 my-auto">
                        <div className="title">2019-20 Shen Varsity Hockey</div>
                    </Col>
                </Row>
                <Roster/>
            </Container>
        );
    }
}

export default App;
