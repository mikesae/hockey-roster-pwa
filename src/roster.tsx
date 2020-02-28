import React, {Component} from 'react';
import players from './players.json';
import {IPlayerProps, Player} from "./player";
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
            <>
                <Row>
                    <Col className="col-2 px-0"></Col>
                    <Col className="col-1 px-0">#</Col>
                    <Col className="col-5 px-0">Name</Col>
                    <Col className="col-2 px-0">Pos.</Col>
                    <Col className="col-1 px-0">Year</Col>
                </Row>
                {roster}
            </>
        );
    }
}