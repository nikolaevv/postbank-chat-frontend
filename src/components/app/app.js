import React from 'react';
import { Route, Redirect } from 'react-router';

import AdminPage from '../pages/admin-page';
import UserPage from '../pages/user-page';

import './app.css';

const App = () => {
    return (
        <div>
            <Route exact path="/">
                <Redirect to="/support"/>
            </Route>


            <Route path="/admin/support" exact component={AdminPage}/>
            <Route path="/support" exact component={UserPage}/>
        </div>
    );
};

export default App;