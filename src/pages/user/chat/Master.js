import React from 'react'
import { Route } from 'react-router-dom'

import Messages from './Messages'
import Peoples from './Peoples'

const Master = () => {
    return (
        <div>
            <Route>
                <Route exact path="/home/chat/" component={Messages} />
                <Route exact path="/home/chat/peoples" component={Peoples} />
            </Route>
        </div>
    );
};

export default Master;