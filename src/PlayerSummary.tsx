import React, {Component} from 'react';
import './player.scss';
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {IPlayerProps} from "./IPlayerProps";
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faChartBar} from "@fortawesome/free-solid-svg-icons/faChartBar";

export class PlayerSummary extends Component<IPlayerProps> {
    private YearMap = new Map([
        ['2021', 'Sr.'],
        ['2022', 'Jr.'],
        ['2023', 'So.'],
        ['2024', 'Fr.']
    ]);

    render() {
        return (
            <Row>
                <Col className="col-2 px-0 my-auto">
                    <Link to={{pathname: `/player/${this.props.uniformNumber}`}}>
                        <Image roundedCircle thumbnail src={this.props.imageUrl} alt={this.props.name}/>
                    </Link>
                </Col>
                <Col className="col-1-5 px-1 my-auto"><b>{this.props.uniformNumber}</b></Col>
                <Col className="col-4 px-0 my-auto">
                    <Link to={{pathname: `/player/${this.props.uniformNumber}`}}>
                        {this.props.name}
                    </Link>
                </Col>
                <Col className="col-1-5 px-0 my-auto text-center">{this.props.position}</Col>
                <Col className="col-1 px-0 my-auto text-center">{this.YearMap.get(this.props.year as string)}</Col>
                <Col className="col-1 px-0 my-auto">
                    <Link to={{pathname: `/player/${this.props.uniformNumber}`}}>
                        <FontAwesomeIcon icon={faUser}/>
                    </Link>
                </Col>
                <Col className="col-1 px-0 my-auto">
                    {this.props.position === 'G'
                        ? <Link to={{pathname: `/goalie-stat-sheet/${this.props.playerId}`}}>
                            <FontAwesomeIcon icon={faChartBar}/>
                        </Link>
                        :
                        <Link to={{pathname: `/player-stat-sheet/${this.props.playerId}`}}>
                            <FontAwesomeIcon icon={faChartBar}/>
                        </Link>
                    }
                </Col>
            </Row>
        );
    }
}