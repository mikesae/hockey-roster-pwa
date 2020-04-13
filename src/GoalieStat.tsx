import React, {Component} from 'react';
import './player.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {IGoalieStatProps} from './IGoalieStatProps';

export class GoalieStat extends Component<IGoalieStatProps> {
    formatGameDate(date: string): string {
        if (date.startsWith('Winter')) {
            return 'Totals:';
        }
        return date;
    }

    render() {
        return (
            <Row>
                <Col className="col-3 px-0 my-auto">{this.formatGameDate(this.props.GameDate)}</Col>
                <Col className="col-4 px-0 my-auto">{this.props.Opponent}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.props.Result}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.props.Minutes}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.props.GoalsAgainst}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.props.Saves}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.props.Percentage}</Col>
            </Row>
        );
    }
}