import React, {Component} from 'react';
import './TopNavbar.scss';
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import Image from "react-bootstrap/Image";

export interface ITopNavBarProps {
    showBackNav: boolean;
}

export class TopNavbar extends Component<ITopNavBarProps> {
    render() {
        return (
            <Navbar className="jumbotron-fluid border-bottom navbar-top" fixed="top">
                <div className="container">
                    { this.props.showBackNav &&
                        <Link to="/" className="navbar-left-link">
                            <FontAwesomeIcon className="link-icon" icon={faChevronLeft}/>
                        </Link>
                    }
                    <span className="navbar-content">
                        <Link to="/">
                            <Image thumbnail fluid src="/shen-hockey-logo.png" className="d-inline-block"/>
                            <span>2019-20 Shen Hockey</span>
                        </Link>
                    </span>
                </div>
            </Navbar>
        );
    }
}