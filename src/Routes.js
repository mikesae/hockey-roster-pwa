import React from "react";
import {Route, withRouter} from "react-router-dom";
import PlayerStatSheet from "./PlayerStatSheet";
import Standings from "./Standings";
import {AnimatedSwitch} from "./AnimatedSwitch";
import Credits from './credits';
import {PlayerDetail} from './PlayerDetail';
import Roster from './roster';
import Schedule from './Schedule';

const routes = [
    {
        component: Roster,
        path: "/"
    },
    {
        component: Credits,
        path: "/credits"
    },
    {
        component: PlayerDetail,
        path: "/player/:number"
    },
    {
        component: PlayerStatSheet,
        path: "/player-stat-sheet/:playerId"
    },
    {
        component: Schedule,
        path: "/schedule"
    },
    {
        component: Standings,
        path: "/standings"
    }
];

const Routes = withRouter(({location}) => {
    return (
        <AnimatedSwitch location={location}>
            {routes.map(route => {
                return (
                    <Route
                        exact
                        key={route.path}
                        path={route.path}
                        component={route.component}
                    />
                );
            })}
        </AnimatedSwitch>
    );
});

export default Routes;
