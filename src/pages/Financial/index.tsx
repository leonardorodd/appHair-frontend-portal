import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from '../Errors/PageNotFound';
import Inputs from './Inputs';
import Outputs from './Outputs';
import CashRegister from './CashRegister';
import Comandas from './Comandas';
import AcountsPayable from './Accounts Payable';
import Commissions from './Comissões';

const Financial: React.FC = () => {
    return (
        <Switch>
            <Route path="/financial/inputs" exact component={Inputs} />
            <Route path="/financial/outputs" exact component={Outputs} />
            <Route path="/financial/comandas" exact component={Comandas} />
            <Route path="/financial/cash" exact component={CashRegister} />
            <Route
                path="/financial/accounts_payable"
                exact
                component={AcountsPayable}
            />
            <Route
                path="/financial/commissions"
                exact
                component={Commissions}
            />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Financial;
