import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import './player.scss';
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";

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
            <Row>
                <Popup
                    trigger={
                        <div className="col-2 img-col"><Image roundedCircle thumbnail src={this.props.imageUrl} alt={this.props.name}/></div>
                    }
                    modal
                    lockScroll={true}
                    className="detail">
                    {close => (
                        <div>
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            <div className="detail-header">
                                <h3>2019-20 Shen Varsity Hockey</h3>
                            </div>
                            <br/>
                            <br/>
                            <img src={this.props.imageUrl} alt={this.props.name}/>
                            <h4 className="player-name">{this.props.name}</h4>
                        </div>
                    )}
                </Popup>
                <div className="col-2">{this.props.uniformNumber}</div>
                <div className="col-4">{this.props.name}</div>
                <div className="col-2">{this.props.position}</div>
                <div className="col-2">{this.YearMap.get(this.props.year)}</div>
            </Row>
        );
    }
}