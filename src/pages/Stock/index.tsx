import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from '../Errors/PageNotFound';

import Input from './StockInput';
import Output from './StockOutput';

import StockEntryXML from './StockInput/StockEntryXML';
import StockEntryManual from './StockInput/StockEntryManual';
import StockExit from './StockOutput/StockExit';
import Promotions from './Promotions';
import Purchases from './Purchases';

const Stock: React.FC = () => {
    return (
        <Switch>
            <Route
                path="/stock/new-auto-entry"
                exact
                component={StockEntryXML}
            />
            <Route
                path="/stock/new-manual-entry"
                exact
                component={StockEntryManual}
            />
            <Route path="/stock/management/input" exact component={Input} />
            <Route path="/stock/management/output" exact component={Output} />
            <Route path="/stock/exit" exact component={StockExit} />
            <Route path="/stock/promotions" exact component={Promotions} />
            <Route path="/stock/purchases" exact component={Purchases} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Stock;
