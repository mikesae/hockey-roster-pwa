import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {IScheduleItemProps} from "./IScheduleItemProps";

export class ScheduleItem extends Component<IScheduleItemProps> {
    render() {
        return (
            <Row>
                <Col className="col-1 px-0 my-auto">{this.props.day}</Col>
                <Col className="col-2 px-0 my-auto">{this.props.date}</Col>
                <Col className="col-1 px-0 my-auto">{this.props.time}</Col>
                <Col className="col-3 px-0 my-auto">{this.props.opponent}</Col>
                <Col className="col-2 px-0 my-auto">{this.props.result}</Col>
                <Col className="col-3 px-0 my-auto">{this.props.location}</Col>
            </Row>
        );
    }
}