import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar, faCalendarAlt, faUser, faVideo} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import './BottomNavbar.scss';
import {faFilm} from '@fortawesome/free-solid-svg-icons/faFilm';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';

export default class BottomNavbar extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {activeLink: '/'};
    }

    changeActiveLink(linkName: string) {
        if (this.state.activeLink !== linkName) {
            this.setState({activeLink: linkName});
        }
    }

    render() {
        const activeLink = this.state.activeLink;

        return (
            <Navbar className="jumbotron-fluid border-top justify-content-center navbar-bottom" fixed="bottom">
                <NavItem className="text-center">
                    <NavLink
                        to="/"
                        isActive={match => {
                            if (!match) {
                                return false;
                            }
                            if (match.isExact) {
                                this.changeActiveLink('/');
                            }
                            return match.isExact;
                        }}
                        activeClassName="active"
                    >
                        <div className="btn">
                            <FontAwesomeIcon
                                className="link-icon"
                                icon={activeLink === '/' ? faUsers : faUser}
                            />
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
                            if (match.isExact) {
                                this.changeActiveLink('schedule');
                            }
                            return match.isExact;
                        }}
                        activeClassName="active"
                    >
                        <div className="btn">
                            <FontAwesomeIcon
                                className="link-icon"
                                icon={activeLink === 'schedule' ? faCalendarAlt : faCalendar}
                            />
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
                            if (match.isExact) {
                                this.changeActiveLink('credits');
                            }
                            return match.isExact;
                        }}
                        activeClassName="active"
                    >
                        <div className="btn">
                            <FontAwesomeIcon
                                className="link-icon"
                                icon={activeLink === 'credits' ? faFilm : faVideo}
                            />
                            <div className="icon-label">Credits</div>
                        </div>
                    </NavLink>
                </NavItem>
            </Navbar>
        );
    }
}