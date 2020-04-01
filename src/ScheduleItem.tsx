import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {IScheduleItemProps} from "./IScheduleItemProps";

export class ScheduleItem extends Component<IScheduleItemProps> {
    render() {
        return (
            <Row>
                <Col className="col-3 px-0 my-auto">
                    <div>{this.props.day} {this.props.time}</div>
                    <div>{this.props.date}</div>
                </Col>
                <Col className="col-4 px-0 my-auto">{this.props.opponent}</Col>
                <Col className="col-3 px-0 my-auto">{this.props.location}</Col>
                <Col className="col-2 px-0 my-auto">{this.props.result}</Col>
            </Row>
        );
    }
}