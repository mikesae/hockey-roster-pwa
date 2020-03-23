import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './BottomNavbar.scss';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';

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
                        activeClassName="active"
                    >
                        <div className="btn">
                            <FontAwesomeIcon icon={faUsers} className="link-icon"/>
                            <div className="icon-label">Roster</div>
                        </div>
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
                        activeClassName="active"
                    >
                        <div className="btn">
                            <FontAwesomeIcon className="link-icon" icon={faCalendarAlt}/>
                            <div className="icon-label">Schedule</div>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem className="text-center">
                    <NavLink
                         to="/credits"
                         isActive={match => {
                             if (!match) {
                                 return false;
                             }
                             return match.isExact;
                         }}
                         activeClassName="active"
                    >
                        <div className="btn">
                            <FontAwesomeIcon className="link-icon" icon={faFilm}/>
                            <div className="icon-label">Credits</div>
                        </div>
                    </NavLink>
                </NavItem>
            </Navbar>
        );
    }
}