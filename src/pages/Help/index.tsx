import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PageNotFound from '../Errors/PageNotFound';
import Questions from './Questions';

const Help: React.FC = () => {
    return (
        <Switch>
            <Route path="/help/questions" component={Questions} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Help;
