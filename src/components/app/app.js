import { Container } from '@material-ui/core';
import React from 'react';
import MessageBoard from '../message-board/message-board';
import AdminPage from '../pages/admin-page';

import './app.css';

const App = () => {
    return (
        <div>
            <AdminPage/>
        </div>
    );
};

export default App;