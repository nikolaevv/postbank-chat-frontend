import React from 'react';
import { Route } from 'react-router';

import AdminPage from '../pages/admin-page';
import UserPage from '../pages/user-page';

import './app.css';

const App = () => {
    return (
        <div>
            <Route path="/admin/support" exact component={AdminPage}/>
            <Route path="/support" exact component={UserPage}/>
        </div>
    );
};

export default App;