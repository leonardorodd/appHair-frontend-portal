import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Home from './Home';
import CreateClient from './CreateClient';
import ClientHistory from './ClientHistory';
import PageNotFound from '../Errors/PageNotFound';
import ServiceDetails from './ClientHistory/ServiceDetails';

const Artist: React.FC = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path="/clients" exact component={Home} />
            <Route path="/clients/create" exact component={CreateClient} />
            <Route path="/clients/history" exact component={ClientHistory} />
            <Route
                path="/clients/history/service"
                exact
                component={ServiceDetails}
            />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Artist;
