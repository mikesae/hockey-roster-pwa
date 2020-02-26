import React, {Component} from 'react';
import players from './players.json';
import {Player, IPlayerProps} from "./player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Roster extends Component {
    render() {
        let roster: any[] = [];

        //sort it.
        players.sort((a:IPlayerProps, b:IPlayerProps) => a.uniformNumber - b.uniformNumber);

        players.forEach(player => {
            roster.push(<Player {...player} key={player.uniformNumber}/>)
        });

        return (
            <Container className="container-fluid container-table">
                <Row>
                    <Col className="col-2"></Col>
                    <Col className="col-2">#</Col>
                    <Col className="col-4">Name</Col>
                    <Col className="col-2">Pos.</Col>
                    <Col className="col-2">Year</Col>
                </Row>
                {roster}
            </Container>
        );
    }
}