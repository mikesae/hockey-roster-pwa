import React, {Component} from 'react';
import './Standings.scss';
import api from './utils/api';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNavbar from './TopNavbar';
import Container from 'react-bootstrap/Container';

interface IStanding {
    team: string;
    conferenceGamesPlayed: number;
    conferenceRecord: string;
    conferencePoints: number;
    overallGamesPlayed: number;
    overallRecord: string;
    goalsFor: number;
    goalsAgainst: number;
    lastSix: string;
    streak:  string;
    winPercentage: string;
}

export default class Standings extends Component {
    state = {
        standings: []
    };

    componentDidMount() {
        api.getStandings().then(standings => {
            this.setState({standings: standings});
        });
    }

    renderPoints(points:number) {
        const pts:string = points.toString(points)
        return pts.replace(".5", "\u00bd")
    }

    streak(streak:string) {
        return streak.replace("Won", "W").replace("Lost", "L")
    }

    htmlStanding(standing: IStanding) {
        return (
            <Row className="standing-row" key={standing.team}>
                <Col className="col-3-5 my-auto px-1 text-left">{standing.team}</Col>
                <Col className="col-1 my-auto px-0 text-left">{standing.conferenceGamesPlayed}</Col>
                <Col className="col-1-5 my-auto px-0 text-left">{standing.conferenceRecord}</Col>
                <Col className="col-1 my-auto px-0 text-left">{this.renderPoints(standing.conferencePoints)}</Col>
                <Col className="col-1-5 my-auto px-0 text-left">{standing.overallRecord}</Col>
                <Col className="col-1-5 my-auto px-0 text-left">{standing.goalsFor}/{standing.goalsAgainst}</Col>
                <Col className="col-1 my-auto px-0 text-left">{this.streak(standing.streak)}</Col>
                <Col className="col-0-5 my-auto px-0 text-left">{standing.winPercentage}</Col>
            </Row>
        );
    }

    render() {
        const renderableStandings: any[] = [];

        if (this.state.standings.length > 0) {
            this.state.standings.forEach(standing => {
                renderableStandings.push(this.htmlStanding(standing));
            })
        }

        return(
            <div className="page">
                <TopNavbar title="2019-20 Standings" showBackNav={true}/>
                <div className="spacer-for-header"/>
                <Container className="standings-container">
                    <Row className="header-row fixed-top">
                        <Col className="col-3-5 my-auto px-1 text-left">
                            <div className="btn">Team</div>
                        </Col>
                        <Col className="col-1 my-auto px-0 text-left">
                            <div className="btn">GP</div>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-left">
                            <div className="btn">Sec</div>
                        </Col>
                        <Col className="col-1 my-auto px-0 text-left">
                            <div className="btn">Pts</div>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-left">
                            <div className="btn">Ovl</div>
                        </Col>
                        <Col className="col-1-5 my-auto px-0 text-left">
                            <div className="btn">GF/A</div>
                        </Col>
                        <Col className="col-1 my-auto px-0 text-left">
                            <div className="btn">Str</div>
                        </Col>
                        <Col className="col-0-5 my-auto px-0 text-left">
                            <div className="btn">%</div>
                        </Col>
                    </Row>
                    {renderableStandings}
                    <div className="spacer"/>
                </Container>
            </div>
        );
    }
}

