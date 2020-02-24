import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import './player.scss';

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
            <div className="row">
                <div className="col-2">{this.props.uniformNumber}</div>
                <Popup
                    trigger={<div className="col-6">{this.props.name}</div>}
                    modal
                    lockScroll={true}
                    className="detail">
                    {close => (
                        <div>
                            <div className="detail-header">
                                <h3>2019-20 Shen Varsity Hockey</h3>
                                <a className="close" onClick={close}>
                                    &times;
                                </a>
                            </div>

                            <br/>
                            <br/>
                            <img src={this.props.imageUrl} alt={this.props.name}/>
                            <h4 className="player-name">{this.props.name}</h4>
                        </div>
                    )}

                </Popup>
                <div className="col-2">{this.props.position}</div>
                <div className="col-2">{this.YearMap.get(this.props.year)}</div>
            </div>
        );
    }
}