import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PhilNav from './philosophy/philnav';
import PhilHome from './philosophy/philhome';
import Abstraction from './philosophy/abstraction';

function Philosophy() {

    let { path } = useRouteMatch();

    return (
        <div className="flex relative h-screen">

                <PhilNav />

                <div className="flex">
                    <div className="pl-6 pt-8 text-gray-700">
                        <Switch>
                            <Route exact path={path}>
                                <PhilHome />
                            </Route>

                            <Route path={`${path}/abstraction`}>
                                <Abstraction />
                            </Route>

                        </Switch>
                    </div>
                </div>
        </div>
    );
}

export default Philosophy;
