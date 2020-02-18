import React, {Component} from 'react';
import './App.css';
import Roster from "./roster";

class App extends Component {
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
