import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import BottomNavbar from './BottomNavbar';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes/>
                <BottomNavbar/>
            </BrowserRouter>
        );
    }
}