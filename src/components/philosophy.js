import React from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import PhilNav from './philnav';
import PhilHome from './philhome';
import Abstraction from './abstraction';

function Philosophy() {

    let { path } = useRouteMatch();

    return (
        <div className="relative h-screen bg-green-100">
            <Router>

                <PhilNav />

                <Switch>
                    <Route exact path={path}>
                        <PhilHome />
                    </Route>

                    <Route path={`${path}/abstraction`}>
                        <Abstraction />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default Philosophy;
