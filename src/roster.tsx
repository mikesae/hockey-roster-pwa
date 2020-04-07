import React, {Component} from 'react';
import './Roster.scss';
import {PlayerSummary} from "./PlayerSummary";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TopNavbar from "./TopNavbar";
import api from "./utils/api";
import { IPlayerProps } from './IPlayerProps';

export default class Roster extends Component {
    state = {
        players: [],
        sortColumn: 'Number',
        sortDescending: true
    };

    componentDidMount() {
        api.getPlayers().then(players => {
            this.setState({
                players: players
            })
        })
    }

    sortBy(sortColumn:string) {
        let sortDescending = this.state.sortDescending;

        if (sortColumn === this.state.sortColumn) {
            sortDescending = !this.state.sortDescending;
        }
        this.setState({ sortColumn: sortColumn, sortDescending: sortDescending});
    }

    sortPlayers(players: IPlayerProps[]) {
        let result = players;
        switch (this.state.sortColumn) {
            case 'Number':
                result = players.sort((a, b) => a.uniformNumber - b.uniformNumber);
                break;
            case 'Name':
                result = players.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'Position':
                result = players.sort((a, b) => a.position.localeCompare(b.position));
                break;
            case 'Year':
                result = players.sort((a, b) => a.year.localeCompare(b.year));
                break;
        }
        if (!this.state.sortDescending) {
            result = result.reverse();
        }
        return result;
    }

    render() {
        let roster: any[] = [];

        const sortedPlayers = this.sortPlayers(this.state.players);
        sortedPlayers.forEach(player => {
            if (player.uniformNumber) {
                roster.push(<PlayerSummary {...player} key={player.uniformNumber}/>);
            }
        });

        return (
            <div className="page">
                <TopNavbar title="2019-20 Roster" showBackNav={false}/>
                <div className="spacer-for-header"/>
                <Container className="roster-container">
                    <Row className="header-row fixed-top">
                        <Col className="col-2 my-auto px-0"/>
                        <Col className="col-1 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Number')}>#</div>
                        </Col>
                        <Col className="col-5 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Name')}>Name</div>
                        </Col>
                        <Col className="col-2 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Position')}>Pos.</div>
                        </Col>
                        <Col className="col-1 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Year')}>Year</div>
                        </Col>
                    </Row>
                    {roster}
                    <div className="spacer"/>
                </Container>
            </div>
        );
    }
}