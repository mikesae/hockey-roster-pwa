import React, {Component} from 'react';
import './TopNavbar.scss';
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface ITopNavBarProps {
    title: string;
    showBackNav: boolean;
}

export class TopNavbar extends Component<ITopNavBarProps> {
    render() {
        return (
            <Navbar className="jumbotron-fluid border-bottom navbar-top" fixed="top">
                <Row className="container-fluid no-gutters">
                    <Col className="col-3">
                        { this.props.showBackNav &&
                            <Link to="/" className="navbar-left-link">
                                <FontAwesomeIcon className="link-icon" icon={faChevronLeft}/>
                            </Link>
                        }
                    </Col>
                    <Col className="col-6 navbar-content">
                        <Link to="/">
                            <span>{this.props.title}</span>
                        </Link>
                    </Col>
                    <Col className="col-3">
                        <Image thumbnail fluid src="/shen-hockey-logo.png"/>
                    </Col>
                </Row>
            </Navbar>
        );
    }
}