import React from 'react';
import players from './players.json';
import Player from "./player";

function Roster() {
    let roster:any[] = [];

    players.forEach(player => {
        roster.push(<Player
            key={player.Number}
            uniformNumber={player.Number}
            name={player.Name}
            position={player.Position}
            year={player.Year}></Player>)
    });

    return (
        <div className="container-fluid container-table">
            <div className="row">
                <div className="col-1">#</div>
                <div className="col-7">Name</div>
                <div className="col-2">Pos.</div>
                <div className="col-2">Year</div>
            </div>
            <div className="row"></div>
            {roster}
        </div>
    );
}

export default Roster;