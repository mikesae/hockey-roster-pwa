import React, {Component} from 'react';
import './player.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {IPlayerStatProps} from './IPlayerStatProps';
import {formatGameDate, formatOpponent, formatPlusMinus} from "./utils/format";

export class PlayerStat extends Component<IPlayerStatProps> {
    render() {
        return (
            <Row>
                <Col className="col-2-5 px-0 my-auto">{formatGameDate(this.props.GameDate)}</Col>
                <Col className="col-3-5 px-0 my-auto">{formatOpponent(this.props.Opponent)}</Col>
                <Col className="col-1-5 px-0 my-auto text-center">{this.props.Goals}</Col>
                <Col className="col-1-5 px-0 my-auto text-center">{this.props.Assists}</Col>
                <Col className="col-1-5 px-0 my-auto text-center">{this.props.Goals + this.props.Assists}</Col>
                <Col className="col-1-5 px-0 my-auto text-center">{formatPlusMinus(this.props.PlusMinus)}</Col>
            </Row>
        );
    }
}