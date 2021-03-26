import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

import Home from './Home';
import CreateArtist from './CreateArtist';

import PageNotFound from '../Errors/PageNotFound';

const Artist: React.FC = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path="/artists" exact component={Home} />
            <Route path="/artists/create" exact component={CreateArtist} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Artist;
