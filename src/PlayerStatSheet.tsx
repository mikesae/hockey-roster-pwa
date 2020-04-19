import React, {Component} from 'react';
import './Roster.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopNavbar from "./TopNavbar";
import {PlayerStat} from './PlayerStat';
import './StatSheet.scss';
import api from './utils/api';
import {IPlayerStatProps} from './IPlayerStatProps';
import moment from 'moment';
import players from './data/players.json';
import {IPlayerStatSheetState} from "./IPlayerStatSheetState";
import SpinnerContainer from "./SpinnerContainer";
import {faSort} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class PlayerStatSheet extends Component<any, IPlayerStatSheetState> {

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
        api.getPlayerStatistics(this.playerId).then(stats => {
            this.setState({
                stats: stats,
                loading: false
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

    getMoment(date: string) {
        return moment(`${date}`, 'MM/DD/YY');
    }

    sort(stats:IPlayerStatProps[]) {
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
            case 'Goals':
                result = result.sort((a, b) => a.Goals - b.Goals);
                break;
            case 'Assists':
                result = result.sort((a, b) => a.Assists - b.Assists);
                break;
            case 'Points':
                result = result.sort((a, b) => (a.Goals + a.Assists) - (b.Goals + b.Assists));
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
        let statistics: any[] = [];

        const player: any = players.find(p => p.playerId === this.playerId);
        const sortedStats = this.sort(this.state.stats);
        sortedStats.forEach(stat => {
            if (stat.GameDate) {
                statistics.push(<PlayerStat  key={stat.Opponent+stat.GameDate} {...stat}/>);
            }
        });

        return (
            <div className="page">
                <TopNavbar title={`2019-20 ${player ? player.name : this.playerId}`} showBackNav={true}/>
                <div className="spacer-for-header"/>
                <SpinnerContainer loading={this.state.loading} className="player-stats-container">
                    <Row className="header-row fixed-top">
                        <Col className="col-2-5 my-auto px-0">
                            <span className="btn" onClick={() => this.sortBy('Date')}>
                                Date<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                        <Col className="col-3-5 my-auto px-0 text-left">
                            <span className="btn" onClick={() => this.sortBy('Opponent')}>
                                Opp<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-left">
                            <span className="btn" onClick={() => this.sortBy('Goals')}>
                                G<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-center">
                            <span className="btn" onClick={() => this.sortBy('Assists')}>
                                A<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-center">
                            <span className="btn" onClick={() => this.sortBy('Points')}>
                                P<FontAwesomeIcon icon={faSort}/>
                            </span>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-right">
                            <span className="btn" onClick={() => this.sortBy('PlusMinus')}>
                                +-<FontAwesomeIcon icon={faSort}/>
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