import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Home from './Home';
import PageNotFound from '../Errors/PageNotFound';

const Providers: React.FC = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path="/providers" exact component={Home} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Providers;
