import React, {Component} from 'react';
import './Roster.scss';
import players from './players.json';
import {PlayerSummary} from "./PlayerSummary";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import Button from "react-bootstrap/Button";

export default class Roster extends Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = { sortColumn: 'Number', sortDescending: true };
    }

    sortBy(sortColumn:string) {
        let sortDescending = this.state.sortDescending;

        if (sortColumn === this.state.sortColumn) {
            sortDescending = !this.state.sortDescending;
        }
        this.setState({ sortColumn: sortColumn, sortDescending: sortDescending});
    }

    sortPlayers() {
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

        const sortedPlayers = this.sortPlayers();
        sortedPlayers.forEach(player => {
            roster.push(<PlayerSummary {...player} key={player.uniformNumber}/>)
        });

        return (
            <>
                <TopNavbar title="2019-20 Roster" showBackNav={false}/>
                <div className="spacer-for-header"/>
                <Container className="roster-container">
                    <Row className="header-row fixed-top">
                        <Col className="col-2 my-auto px-0"></Col>
                        <Col className="col-1 my-auto px-0">
                            <Button onClick={() =>this.sortBy('Number')}>#</Button>
                        </Col>
                        <Col className="col-5 my-auto px-0">
                            <Button onClick={() => this.sortBy('Name')}>Name</Button>
                        </Col>
                        <Col className="col-2 my-auto px-0">
                            <Button onClick={() => this.sortBy('Position')}>Pos.</Button>
                        </Col>
                        <Col className="col-1 my-auto px-0">
                            <Button onClick={() => this.sortBy('Year')}>Year</Button>
                        </Col>
                    </Row>
                    {roster}
                </Container>
                <BottomNavbar/>
            </>
        );
    }
}