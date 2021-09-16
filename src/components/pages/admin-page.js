import { Container } from '@material-ui/core';
import React from 'react';
import MessageBoard from '../message-board/message-board';
import Dialogs from '../dialogs/dialogs';
import { AdminHeader } from '../headers/headers';

import './admin-page.css';

const AdminPage = () => {
    return (
        <Container>
            <div className="admin-board-container">
                
                    <AdminHeader/>
                    
                    <div className="admin-board">
                        <Dialogs/>
                        <MessageBoard role="BANK"/>
                    </div>
                
            </div>
        </Container>
    );
};

export default AdminPage;