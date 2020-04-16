import React, {Component} from 'react';
import './Roster.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopNavbar from "./TopNavbar";
import './StatSheet.scss';
import api from './utils/api';
import moment from 'moment';
import players from './data/players.json';
import {IGoalieStatSheetState} from "./IGoalieStatSheetState";
import {IGoalieStatProps} from "./IGoalieStatProps";
import {GoalieStat} from "./GoalieStat";
import SpinnerContainer from "./SpinnerContainer";

export default class GoalieStatSheet extends Component<any, IGoalieStatSheetState> {

    private readonly playerId: string;

    constructor(props: any) {
        super(props);
        this.playerId = props.match.params.playerId;

        this.state = {
            stats: [],
            sortColumn: 'Date',
            sortDescending: true,
            loading: true
        };
    }

    componentDidMount() {
        api.getGoalieStatistics(this.playerId).then(stats => {
            this.setState({
                stats: stats,
                loading: false
            })
        })
    }

    sortBy(sortColumn: string) {
        let sortDescending = this.state.sortDescending;

        if (sortColumn === this.state.sortColumn) {
            sortDescending = !this.state.sortDescending;
        }
        this.setState({sortColumn: sortColumn, sortDescending: sortDescending});
    }

    getMoment(date: string) {
        return moment(`${date}`, 'MM/DD/YY');
    }

    sort(stats: IGoalieStatProps[]) {
        let result = stats;
        switch (this.state.sortColumn) {
            case 'Date':
                result = result.sort(
                    (a, b) => {
                        const aMoment = this.getMoment(a.GameDate);
                        const bMoment = this.getMoment(b.GameDate);
                        return aMoment.diff(bMoment);
                    });
                break;
            case 'Opponent':
                result = result.sort((a, b) => a.Opponent.localeCompare(b.Opponent));
                break;
            case 'Result':
                result = result.sort((a, b) => a.Result.localeCompare(b.Result));
                break;
            case 'Minutes':
                result = result.sort((a, b) => a.Minutes - b.Minutes);
                break;
            case 'Saves':
                result = result.sort((a, b) => a.Saves - b.Saves);
                break;

            case 'Percentage':
                result = result.sort((a, b) => a.Percentage - b.Percentage);
                break;
        }
        if (!this.state.sortDescending) {
            result = result.reverse();
        }
        return result;
    }

    render() {
        let statistics: any[] = [];

        const player: any = players.find(p => p.playerId === this.playerId);
        const sortedStats = this.sort(this.state.stats);
        sortedStats.forEach(stat => {
            if (stat.GameDate) {
                statistics.push(<GoalieStat key={stat.Opponent + stat.GameDate} {...stat}/>);
            }
        });

        return (
            <div className="page">
                <TopNavbar title={`2019-20 ${player.name}`} showBackNav={true}/>
                <div className="spacer-for-header"/>
                <SpinnerContainer loading={this.state.loading} className="roster-container player-stats-container">
                    <Row className="header-row fixed-top">
                        <Col className="col-2-5 my-auto px-0 text-left">
                            <div className="btn" onClick={() => this.sortBy('Date')}>Date</div>
                        </Col>
                        <Col className="col-3 my-auto px-0 text-left">
                            <div className="btn" onClick={() => this.sortBy('Opponent')}>Opponent</div>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-center">
                            <div className="btn" onClick={() => this.sortBy('Result')}>Result</div>
                        </Col>
                        <Col className="col-1 my-auto px-0 text-right">
                            <div className="btn" onClick={() => this.sortBy('Min')}>Min</div>
                        </Col>
                        <Col className="col-1 my-auto px-0 text-right">
                            <div className="btn" onClick={() => this.sortBy('GA')}>GA</div>
                        </Col>
                        <Col className="col-1 my-auto px-0 text-right">
                            <div className="btn" onClick={() => this.sortBy('Saves')}>S</div>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-right">
                            <div className="btn" onClick={() => this.sortBy('Pct')}>Pct</div>
                        </Col>
                    </Row>
                    {statistics}
                    <div className="spacer"/>
                </SpinnerContainer>
            </div>
        );
    }
}