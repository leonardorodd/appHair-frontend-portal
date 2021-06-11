import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Home from './Home';
import PageNotFound from '../Errors/PageNotFound';

const Products: React.FC = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path="/products" exact component={Home} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Products;
