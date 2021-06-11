import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Client from '../pages/Client';
import List from '../pages/List';
import SignIn from '../pages/SignIn';
import Providers from '../pages/Providers';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Schedule from '../pages/Schedule';
import Financial from '../pages/Financial';
import Artist from '../pages/Artist';
import Establishment from '../pages/Establishment';

const Routes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/signin" component={SignIn} exact />
            <Route path="/clients" component={Client} />
            <Route path="/providers" component={Providers} exact />
            <Route path="/establishment" component={Establishment} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/services" component={Services} exact />
            <Route path="/list/:type" component={List} exact />
            <Route path="/financial" component={Financial} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/artists" component={Artist} />
        </Switch>
    </Layout>
);

export default Routes;
