import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom';
import './BottomNavbar.scss';
import Button from 'react-bootstrap/Button';
import {faFilm} from '@fortawesome/free-solid-svg-icons/faFilm';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';

export default class BottomNavbar extends Component {
    render() {
        return (
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
                            <FontAwesomeIcon className="link-icon" icon={faUsers}/>
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
                    <Link to="/credits">
                        <Button>
                            <FontAwesomeIcon className="link-icon" icon={faFilm}/>
                            <div className="icon-label">Credits</div>
                        </Button>
                    </Link>
                </NavItem>
            </Navbar>
        );
    }
}