import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

export class Schedule extends Component {
    render() {
        return (
            <>
                <TopNavbar title="Schedule" showBackNav={true}/>
                <Container className="App container-fluid">
                    <h4>TBD</h4>
                </Container>
                <BottomNavbar/>
            </>
        )
    };
}