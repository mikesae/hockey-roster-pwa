import React, {Component} from 'react';
import players from './players.json';
import {Player, IPlayerProps} from "./player";

export default class Roster extends Component {
    render() {
        let roster: any[] = [];

        //sort it.
        players.sort((a:IPlayerProps, b:IPlayerProps) => a.uniformNumber - b.uniformNumber);

        players.forEach(player => {
            roster.push(<Player {...player} key={player.uniformNumber}/>)
        });

        return (
            <div className="container-fluid container-table">
                <div className="row">
                    <div className="col-2">#</div>
                    <div className="col-6">Name</div>
                    <div className="col-2">Pos.</div>
                    <div className="col-2">Year</div>
                </div>
                {roster}
            </div>
        );
    }
}