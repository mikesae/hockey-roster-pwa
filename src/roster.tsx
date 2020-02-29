import React, {Component} from 'react';
import players from './players.json';
import {PlayerSummary} from "./PlayerSummary";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {IPlayerProps} from "./IPlayerProps";
import Container from "react-bootstrap/Container";

export default class Roster extends Component {
    render() {
        let roster: any[] = [];

        players.sort((a:IPlayerProps, b:IPlayerProps) => a.uniformNumber - b.uniformNumber);
        players.forEach(player => {
            roster.push(<PlayerSummary {...player} key={player.uniformNumber}/>)
        });

        return (
            <Container>
                <Row>
                    <Col className="col-2 px-0"></Col>
                    <Col className="col-1 px-0">#</Col>
                    <Col className="col-5 px-0">Name</Col>
                    <Col className="col-2 px-0">Pos.</Col>
                    <Col className="col-1 px-0">Year</Col>
                </Row>
                {roster}
            </Container>
        );
    }
}