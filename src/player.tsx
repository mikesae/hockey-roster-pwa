import React from 'react';
import './player.css';

type PlayerProps = {
    uniformNumber: number,
    name: string,
    position: string,
    year: string;
}

export const Player = ({uniformNumber, name, position, year}: PlayerProps) =>
    <div className="row">
        <div className="col-1">{uniformNumber}</div>
        <div className="col-7">{name}</div>
        <div className="col-2">{position}</div>
        <div className="col-2">{year}</div>
    </div>;

export default Player;