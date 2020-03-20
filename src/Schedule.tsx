import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import TopNavbar from "./TopNavbar";
import './Schedule.scss';

export class Schedule extends Component {
    render() {
        return (
            <>
                <TopNavbar title="Schedule" showBackNav={true}/>
                <Container className="page container">
                    <h4>TBD</h4>
                </Container>
                <div className="spacer"/>
            </>
        )
    };
}