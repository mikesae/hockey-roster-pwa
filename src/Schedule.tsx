import React, {Component} from 'react';
import './Schedule.scss';
import scheduleItems from './data/2019-20-Schedule.json';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TopNavbar from "./TopNavbar";
import {ScheduleItem} from "./ScheduleItem";

export default class Schedule extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {sortColumn: 'Number', sortDescending: true};
    }

    sortBy(sortColumn: string) {
        let sortDescending = this.state.sortDescending;

        if (sortColumn === this.state.sortColumn) {
            sortDescending = !this.state.sortDescending;
        }
        this.setState({sortColumn: sortColumn, sortDescending: sortDescending});
    }

    sort() {
        let result = scheduleItems;
        switch (this.state.sortColumn) {
            case 'Date':
                result = scheduleItems.sort((a, b) => a.date.localeCompare(b.date));
                break;
            case 'Day':
                result = scheduleItems.sort((a, b) => a.day.localeCompare(b.day));
                break;
            case 'Time':
                result = scheduleItems.sort((a, b) => a.time.localeCompare(b.time));
                break;
            case 'Opponent':
                result = scheduleItems.sort((a, b) => a.opponent.localeCompare(b.opponent));
                break;
        }
        if (!this.state.sortDescending) {
            result = result.reverse();
        }
        return result;
    }

    render() {
        let Schedule: any[] = [];

        const sortedItems = this.sort();
        sortedItems.forEach(item => {
            if (item.date) {
                Schedule.push(<ScheduleItem {...item} key={item.date}/>);
            }
        });

        return (
            <div className="page">
                <TopNavbar title="2019-20 Schedule" showBackNav={false}/>
                <div className="spacer-for-header"/>
                <Container className="schedule-container">
                    <Row className="header-row fixed-top">
                        <Col className="col-1 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Day')}>Day</div>
                        </Col>
                        <Col className="col-2 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Date')}>Date</div>
                        </Col>
                        <Col className="col-1 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Time')}>Time</div>
                        </Col>
                        <Col className="col-3 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Opponent')}>Opponent</div>
                        </Col>
                        <Col className="col-2 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Result')}>Result</div>
                        </Col>
                        <Col className="col-3 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Location')}>Location</div>
                        </Col>
                    </Row>
                    {Schedule}
                    <div className="spacer"/>
                </Container>
            </div>
        );
    }
}