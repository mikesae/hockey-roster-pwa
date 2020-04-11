import React, {Component} from 'react';
import './Roster.scss';
import stats from './data/PlayerStats17.json';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TopNavbar from "./TopNavbar";
import { PlayerStat } from './PlayerStat';
import './PlayerStatSheet.scss';

export default class PlayerStatSheet extends Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = { sortColumn: 'Date', sortDescending: true };
    }

    sortBy(sortColumn:string) {
        let sortDescending = this.state.sortDescending;

        if (sortColumn === this.state.sortColumn) {
            sortDescending = !this.state.sortDescending;
        }
        this.setState({ sortColumn: sortColumn, sortDescending: sortDescending});
    }

    sort() {
        let result = stats[0];
        switch (this.state.sortColumn) {
            case 'Date':
                //result = stats.sort((a, b) => a.GameDate - b.GameDate);
                break;
            case 'Opponent':
                result = result.sort((a, b) => a.Opponent.localeCompare(b.Opponent));
                break;
            case 'Goals':
                result = result.sort((a, b) => a.Goals - b.Goals);
                break;
            case 'Assists':
                result = result.sort((a, b) => a.Assists - b.Assists);
                break;
            case 'PlusMinus':
                result = result.sort((a, b) => a.PlusMinus - b.PlusMinus);
                break;
        }
        if (!this.state.sortDescending) {
            result = result.reverse();
        }
        return result;
    }

    render() {
        let roster: any[] = [];

        const sortedStats = this.sort();
        sortedStats.forEach(stat => {
            if (stat.GameDate) {
                roster.push(<PlayerStat {...stat}/>);
            }
        });

        return (
            <div className="page">
                <TopNavbar title="2019-20 Statistics" showBackNav={true}/>
                <div className="spacer-for-header"/>
                <Container className="roster-container player-stats-container">
                    <Row className="header-row fixed-top">
                        <Col className="col-3 my-auto px-0 text-left">
                            <div className="btn" onClick={() => this.sortBy('Date')}>Date</div>
                        </Col>
                        <Col className="col-4 my-auto px-0 text-left">
                            <div className="btn" onClick={() => this.sortBy('Opponent')}>Opponent</div>
                        </Col>
                        <Col className="col-1 my-auto px-0 text-left">
                            <div className="btn" onClick={() => this.sortBy('Goals')}>G</div>
                        </Col>
                        <Col className="col-1 my-auto px-0 text-left">
                            <div className="btn" onClick={() => this.sortBy('Assists')}>A</div>
                        </Col>
                        <Col className="col-1 my-auto px-0 text-left">
                            <div className="btn" onClick={() => this.sortBy('Points')}>P</div>
                        </Col>
                        <Col className="col-1 my-auto px-0 text-left">
                            <div className="btn" onClick={() => this.sortBy('PlusMinus')}>+/-</div>
                        </Col>
                    </Row>
                    {roster}
                    <div className="spacer"/>
                </Container>
            </div>
        );
    }
}