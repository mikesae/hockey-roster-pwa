import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import './player.css';

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
                <div className="col-1">{this.props.uniformNumber}</div>
                <Popup
                    trigger={<div className="col-7">{this.props.name}</div>}
                    modal
                    lockScroll={true}
                    className="detail">
                    {close => (
                        <div>
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            <br/>
                            <br/>
                            <img src={this.props.imageUrl} alt={this.props.name}/>
                            <div className="player-name">{this.props.name}</div>
                        </div>
                    )}

                </Popup>
                <div className="col-2">{this.props.position}</div>
                <div className="col-2">{this.YearMap.get(this.props.year)}</div>
            </div>
        );
    }
}