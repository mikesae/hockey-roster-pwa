import React, {Component} from 'react';
import './Schedule.scss';
import scheduleItems from './data/2019-20-Schedule.json';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TopNavbar from "./TopNavbar";
import {ScheduleItem} from "./ScheduleItem";
import {IScheduleItemProps} from "./IScheduleItemProps";

export default class Schedule extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {sortColumn: 'Date', sortDescending: true};
    }

    sortBy(sortColumn: string) {
        let sortDescending = this.state.sortDescending;

        if (sortColumn === this.state.sortColumn) {
            sortDescending = !this.state.sortDescending;
        }
        this.setState({sortColumn: sortColumn, sortDescending: sortDescending});
    }

    sortItems(items: IScheduleItemProps[]) {
        let result;

        switch (this.state.sortColumn) {
            case 'Date':
                result = items.sort((a, b) => a.date.localeCompare(b.date));
                break;
            case 'Opponent':
                result = items.sort((a, b) => a.opponent.localeCompare(b.opponent));
                break;
            case 'Location':
                result = items.sort((a, b) => a.location.localeCompare(b.location));
                break;
            case 'Result':
                result = items.sort((a, b) => a.result.localeCompare(b.result));
                break;
            default:
                result = items;
        }
        if (!this.state.sortDescending) {
            result = result.reverse();
        }
        return result;
    }

    render() {
        const schedule: any[] = [];
        const sortedItems = this.sortItems(scheduleItems);

        sortedItems.forEach(item => {
            schedule.push(<ScheduleItem {...item} key={item.date}/>);
        });

        return (
            <div className="page">
                <TopNavbar title="2019-20 Schedule" showBackNav={true}/>
                <div className="spacer-for-header"/>
                <Container className="schedule-container">
                    <Row className="header-row fixed-top">
                        <Col className="col-3 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Date')}>Date</div>
                        </Col>
                        <Col className="col-4 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Opponent')}>Opponent</div>
                        </Col>
                        <Col className="col-3 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Location')}>Location</div>
                        </Col>
                        <Col className="col-2 my-auto px-0">
                            <div className="btn" onClick={() => this.sortBy('Result')}>Result</div>
                        </Col>
                    </Row>
                    {schedule}
                    <div className="spacer"/>
                </Container>
            </div>
        );
    }
}