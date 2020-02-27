import React, {Component} from 'react';
import './App.scss';
import Roster from "./roster";
import Image from "react-bootstrap/Image";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="jumbotron jumbotron-fluid">
                    <Image roundedCircle thumbnail src="maskable_icon.png"/>
                    <span className="title">2019-20 Shen Varsity Hockey</span>
                </div>
                <Roster/>
            </div>
        );
    }
}

export default App;
