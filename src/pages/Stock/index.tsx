import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from '../Errors/PageNotFound';

import Management from './Management';
import StockEntryXML from './StockEntryXML';

const Stock: React.FC = () => {
    return (
        <Switch>
            <Route path="/stock/new-entry" exact component={StockEntryXML} />
            <Route path="/stock/management" exact component={Management} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default Stock;
