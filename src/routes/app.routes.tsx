import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Clientes from '../pages/Clients';
import List from '../pages/List';
import SignIn from '../pages/SignIn';
import Providers from '../pages/Providers';
import Services from '../pages/Services';

const Routes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/signin" component={SignIn} exact />
            <Route path="/clients" component={Clientes} exact />
            <Route path="/providers" component={Providers} exact />
            <Route path="/services" component={Services} exact />
            <Route path="/list/:type" component={List} exact />
        </Switch>
    </Layout>
);

export default Routes;
