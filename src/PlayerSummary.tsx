import React, {Component} from 'react';
import './player.scss';
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {IPlayerProps} from "./IPlayerProps";
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faHockeyPuck} from "@fortawesome/free-solid-svg-icons/faHockeyPuck";

export class PlayerSummary extends Component<IPlayerProps> {
    private YearMap = new Map([
        ['2020', 'Sr.'],
        ['2021', 'Jr.'],
        ['2022', 'So.'],
        ['2023', 'Fr.']
    ]);

    render() {
        return (
            <Row>
                <Col className="col-2 px-0 my-auto">
                    <Link to={{pathname: `/player/${this.props.uniformNumber}`}}>
                        <Image roundedCircle thumbnail src={this.props.imageUrl} alt={this.props.name}/>
                    </Link>
                </Col>
                <Col className="col-1-5 px-0 my-auto">{this.props.uniformNumber}</Col>
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
                            <FontAwesomeIcon icon={faHockeyPuck}/>
                        </Link>
                        :
                        <Link to={{pathname: `/player-stat-sheet/${this.props.playerId}`}}>
                            <FontAwesomeIcon icon={faHockeyPuck}/>
                        </Link>
                    }
                </Col>
            </Row>
        );
    }
}