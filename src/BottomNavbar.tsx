import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList } from '@fortawesome/free-solid-svg-icons/faThList';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import './BottomNavbar.scss';
import Button from 'react-bootstrap/Button';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';

export default class BottomNavbar extends Component {
    render() {
        return (
            <>
                <div className="spacer"/>
                <Navbar className="jumbotron-fluid border-top justify-content-center navbar-bottom" fixed="bottom">
                    <NavItem className="text-center">
                        <NavLink
                            to="/"
                            isActive={match => {
                                if (!match) {
                                    return false;
                                }
                                return match.isExact;
                            }}
                        >
                            <Button>
                                <FontAwesomeIcon className="link-icon" icon={faThList}/>
                                <div className="icon-label">Roster</div>
                            </Button>
                        </NavLink>
                    </NavItem>
                    <NavItem className="text-center">
                        <NavLink
                            to="/schedule"
                            isActive={match => {
                                if (!match) {
                                    return false;
                                }
                                return match.isExact;
                            }}
                        >
                            <Button>
                                <FontAwesomeIcon className="link-icon" icon={faCalendarAlt}/>
                                <div className="icon-label">Schedule</div>
                            </Button>
                        </NavLink>
                    </NavItem>
                    <NavItem className="text-center">
                        <Link to="/player/0">
                            <Button>
                                <FontAwesomeIcon className="link-icon" icon={faLaptopCode}/>
                                <div className="icon-label">Designer</div>
                            </Button>
                        </Link>
                    </NavItem>
                </Navbar>
            </>
        );
    }
}