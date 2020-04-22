import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {IScheduleItemProps} from './IScheduleItemProps';

export class ScheduleItem extends Component<IScheduleItemProps> {
    private resultMap = new Map([
        ['L', 'Loss'],
        ['W', 'Win'],
        ['T', 'Tie'],
        ['-', '']
    ]);

    htmlResult(result: string) {
        const score = result.slice(2);
        const winOrLoss = result.slice(0, 1).toUpperCase();
        return (
            <>
                <div>{this.resultMap.get(winOrLoss)}</div>
                <div>{score}</div>
            </>
        )
    }

    render() {
        return (
            <Row className="schedule-item">
                <Col className="col-3 px-0 my-auto">
                    <div className="small">{this.props.day} {this.props.date}</div>
                    <div className="small">{this.props.time}</div>
                </Col>
                <Col className="col-7 px-0 my-auto">
                    <div className="media">
                        {this.props.logoUrl && <img className="align-self-center mx-1 my-1" src={this.props.logoUrl}
                                                    alt={this.props.opponent}/>}
                        <div className="media-body">
                            <span className={this.props.home ? 'font-weight-bold' : ''}>{this.props.opponent}</span>
                            {this.props.section !== 'II' &&
                            <span className="section-text">({this.props.section})</span>}
                            <div className="small">
                                <a className="btn-link" href={this.props.locationUrl}>{this.props.location}</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="col-2 px-0 my-auto">{this.htmlResult(this.props.result)}</Col>
            </Row>
        );
    }
}