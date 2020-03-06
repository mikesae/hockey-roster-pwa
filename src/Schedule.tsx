import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import TopNavbar from "./TopNavbar";

export class Schedule extends Component {
    render() {
        return (
            <>
                <TopNavbar showBackNav={true}/>
                <div className="spacer"/>
                <Container className="App container-fluid">
                    <h4>Schedule TBD</h4>
                </Container>
                <div className="spacer"/>
            </>
        )
    };
}