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
import {faSort} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                <SpinnerContainer loading={this.state.loading} className="player-stats-container">
                    <Row className="header-row fixed-top">
                        <Col className="col-2-5 my-auto px-0 text-left">
                            <span className="btn" onClick={() => this.sortBy('Date')}>
                                Date<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                        <Col className="col-3 my-auto px-0 text-left">
                            <span className="btn" onClick={() => this.sortBy('Opponent')}>
                                Opp<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-center">
                            <span className="btn" onClick={() => this.sortBy('Result')}>
                                WL<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-right">
                            <span className="btn" onClick={() => this.sortBy('Min')}>
                                M<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                        <Col className="col-2 my-auto px-0 text-right">
                            <span className="btn" onClick={() => this.sortBy('Goals')}>
                                G/S<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                        <Col className="col my-auto px-0 text-right">
                            <span className="btn" onClick={() => this.sortBy('Percentage')}>
                                %<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                    </Row>
                    {statistics}
                    <div className="spacer"/>
                </SpinnerContainer>
            </div>
        );
    }
}