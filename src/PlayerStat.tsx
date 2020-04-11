import React, {Component} from 'react';
import './player.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IPlayerStatProps } from './IPlayerStatProps';

export class PlayerStat extends Component<IPlayerStatProps> {
    formatOpponent(data: string) {
        if (data.startsWith("@")) {
            return (data.slice(1));
        }
        return data;
    }

    formatPlusMinus(data: number):string {
        if (data > 0) {
            return `+${data}`;
        }
        if (data === 0) {
            return '0';
        }
        return ` ${data}`;
    }

    render() {
        return (
            <Row key={this.props.GameDate+this.props.Opponent}>
                <Col className="col-3 px-0 my-auto">{this.props.GameDate}</Col>
                <Col className="col-4 px-0 my-auto">{this.formatOpponent(this.props.Opponent)}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.props.Goals}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.props.Assists}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.props.Goals + this.props.Assists}</Col>
                <Col className="col-1 px-0 my-auto text-right">{this.formatPlusMinus(this.props.PlusMinus)}</Col>
            </Row>
        );
    }
}