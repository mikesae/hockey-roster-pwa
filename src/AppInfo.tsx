import React, {Component} from 'react';
import appPackage from '../package.json';

export default class AppInfo extends Component {
    render() {
        return (
            <span className="small">App Version: {appPackage.version}</span>
        )
    }
}