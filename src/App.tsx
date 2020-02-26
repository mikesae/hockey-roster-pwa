import React, {Component} from 'react';
import './App.scss';
import Roster from "./roster";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="jumbotron jumbotron-fluid">
                    <h4>2019-20 Shen Varsity Hockey</h4>
                </div>
                <Roster></Roster>
            </div>
        );
    }
}

export default App;
