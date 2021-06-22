import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from '../Errors/PageNotFound';
import Inputs from './Inputs';
import Outputs from './Outputs';
import Comandas from './Comandas';

const Financial: React.FC = () => {
    return (
        <Switch>
            <Route path="/financial/inputs" exact component={Inputs} />
            <Route path="/financial/outputs" exact component={Outputs} />
            <Route path="/financial/comandas" exact component={Comandas} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Financial;
