import React, {Component} from 'react';
import './player.css';

interface PlayerProps {
    uniformNumber: number,
    name: string,
    position: string,
    year: string;
}

export default class Player extends Component<PlayerProps> {
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
                <div className="col-7">{this.props.name}</div>
                <div className="col-2">{this.props.position}</div>
                <div className="col-2">{this.YearMap.get(this.props.year)}</div>
            </div>
        );
    }
}