import React from 'react';
import './player.css';

interface PlayerProps {
    uniformNumber: number,
    name: string,
    position: string,
    year: string;
}

export const Player = (props: PlayerProps) =>
    <div className="row">
        <div className="col-1">{props.uniformNumber}</div>
        <div className="col-7">{props.name}</div>
        <div className="col-2">{props.position}</div>
        <div className="col-2">{props.year}</div>
    </div>;

export default Player;