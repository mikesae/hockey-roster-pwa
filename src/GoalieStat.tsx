import React, {Component} from 'react';
import './player.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {IGoalieStatProps} from './IGoalieStatProps';
import {formatGameDate, formatOpponent, formatPercentage} from "./utils/format";

export class GoalieStat extends Component<IGoalieStatProps> {
    render() {
        return (
            <Row>
                <Col className="col-2-5 my-auto px-0 text-left">{formatGameDate(this.props.GameDate)}</Col>
                <Col className="col-3 my-auto px-0 text-left">{formatOpponent(this.props.Opponent)}</Col>
                <Col className="col-1-5 my-auto px-0 text-center">{this.props.Result}</Col>
                <Col className="col-1-5 my-auto px-0 text-right">{this.props.Minutes}</Col>
                <Col className="col-2 my-auto px-0 text-right">{`${this.props.GoalsAgainst}/${this.props.Saves}`}</Col>
                <Col className="col my-auto px-0 text-right">{formatPercentage(this.props.Percentage)}</Col>
            </Row>
        );
    }
}