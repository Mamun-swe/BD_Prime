import React from 'react'
import { Route } from 'react-router-dom'

import DashboardIndex from './Dashboard/Index'
import CategoryIndex from './Category/Index'
import CategoryCreate from './Category/Create'

const Master = () => {
    return (
        <div>
            <Route>
                <Route exact path="/admin/" component={DashboardIndex} />
                <Route exact path="/admin/category" component={CategoryIndex} />
                <Route exact path="/admin/category/create" component={CategoryCreate} />

            </Route>
        </div>
    );
};

export default Master;