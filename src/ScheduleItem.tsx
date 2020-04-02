import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {IScheduleItemProps} from "./IScheduleItemProps";

export class ScheduleItem extends Component<IScheduleItemProps> {
    render() {
        return (
            <Row>
                <Col className="col-3 px-0 my-auto">
                    <div>{this.props.date}</div>
                    <div>{this.props.day} {this.props.time}</div>
                </Col>
                <Col className="col-7 px-1 my-auto">
                    <div>{this.props.opponent}</div>
                    <div className="small"><a className="btn-link">{this.props.location}</a></div>
                </Col>
                <Col className="col-2 px-0 my-auto">{this.props.result}</Col>
            </Row>
        );
    }
}