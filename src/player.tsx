import React from 'react';
import './player.css';

interface PlayerProps {
    uniformNumber: number,
    name: string,
    position: string,
    year: string;
}

const YearMap = new Map([
    ['2020', 'Sr.'],
    ['2021', 'Jr.'],
    ['2022', 'So.'],
    ['2023', 'Fr.']
]);


export const Player = (props: PlayerProps) =>
    <div className="row">
        <div className="col-1">{props.uniformNumber}</div>
        <div className="col-7">{props.name}</div>
        <div className="col-2">{props.position}</div>
        <div className="col-2">{YearMap.get(props.year)}</div>
    </div>;

export default Player;