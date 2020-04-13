import React, {Component} from 'react';
import './player.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IPlayerStatProps } from './IPlayerStatProps';

export class PlayerStat extends Component<IPlayerStatProps> {
    formatPlusMinus(data: number):string {
        if (data > 0) {
            return `+${data}`;
        }
        if (data === 0) {
            return '0';
        }
        return ` ${data}`;
    }

    formatGameDate(date: string):string {
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
                <Col className="col-1 px-0 my-auto text-right">{this.props.Goals}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.props.Assists}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.props.Goals + this.props.Assists}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.formatPlusMinus(this.props.PlusMinus)}</Col>
            </Row>
        );
    }
}