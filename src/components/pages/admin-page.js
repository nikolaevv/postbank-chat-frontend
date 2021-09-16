import { Container } from '@material-ui/core';
import React from 'react';
import MessageBoard from '../message-board/message-board';
import Dialogs from '../dialogs/dialogs';
import { AdminHeader } from '../headers/headers';

import './pages.css';

const AdminPage = () => {
    return (
        <div className="admin-board-container">
            <AdminHeader/>
            <div>
                <Container>
                    <div className="message-board">
                        <Dialogs/>
                        <MessageBoard role="BANK"/>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AdminPage;