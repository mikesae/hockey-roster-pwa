import React, {Component} from 'react';
import './TopNavbar.scss';
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

export interface ITopNavBarProps {
    title: string;
    showBackNav: boolean;
}

export default class TopNavbar extends Component<ITopNavBarProps> {
    render() {
        return (
            <>
            <Navbar className="jumbotron-fluid border-bottom navbar-top" fixed="top">
                <Row className="container-fluid no-gutters">
                    <Col className="col-3">
                        {this.props.showBackNav &&
                        <Link to="/" className="navbar-left-link">
                            <Button>
                                <FontAwesomeIcon className="link-icon" icon={faChevronLeft}/>
                            </Button>
                        </Link>
                        }
                    </Col>
                    <Col className="col-6 navbar-content">
                        <span>{this.props.title}</span>
                    </Col>
                    <Col className="col-3 col-image">
                        <Image thumbnail fluid src="/shen-hockey-logo.png"/>
                    </Col>
                </Row>
            </Navbar>
            <div className="spacer"/>
            </>
        );
    }
}