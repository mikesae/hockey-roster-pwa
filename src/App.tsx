import React, {Component} from 'react';
import './App.css';
import Roster from "./roster";

class App extends Component {
    isAndroid() {
        const userAgent = navigator.userAgent.toLowerCase();
        return userAgent.indexOf('android') !== -1;
    };
    componentDidMount() {
        if (this.isAndroid()) {
            document.body.classList.add('android-text-adjust');
        }
    }

    render() {
        return (
            <div className="App">
                <div className="jumbotron jumbotron-fluid">
                    <h3>2019-20 Shen Varsity Hockey</h3>
                </div>
                <Roster></Roster>
            </div>
        );
    }
}

export default App;
