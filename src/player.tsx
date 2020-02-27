import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import './player.scss';
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IPlayerProps {
    uniformNumber: number,
    name: string,
    position: string,
    year: string;
    imageUrl?: string;
}

export class Player extends Component<IPlayerProps> {
    private YearMap = new Map([
        ['2020', 'Sr.'],
        ['2021', 'Jr.'],
        ['2022', 'So.'],
        ['2023', 'Fr.']
    ]);

    render() {
        return (
            <Popup
                trigger={
                    <Row>
                        <Col className="col-2 px-0 my-auto"><Image roundedCircle thumbnail src={this.props.imageUrl}
                                                                   alt={this.props.name}/></Col>
                        <Col className="col-2 px-0 my-auto">{this.props.uniformNumber}</Col>
                        <Col className="col-4 px-0 my-auto">{this.props.name}</Col>
                        <Col className="col-2 px-0 my-auto">{this.props.position}</Col>
                        <Col className="col-2 px-0 my-auto">{this.YearMap.get(this.props.year)}</Col>
                    </Row>
                }
                modal
                lockScroll
                className="detail">
                {close => (
                    <div>
                        <a className="close" onClick={close}>
                            &times;
                        </a>
                        <div className="detail-header">
                            <h4>2019-20 Shen Varsity Hockey</h4>
                        </div>
                        <br/>
                        <br/>
                        <img src={this.props.imageUrl} alt={this.props.name}/>
                        <h4 className="player-name">{this.props.name}</h4>
                    </div>
                )}
            </Popup>
        );
    }
}