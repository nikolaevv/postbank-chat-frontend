import { Container } from '@material-ui/core';
import React from 'react';
import MessageBoard from '../message-board/message-board';
import Dialogs from '../dialogs/dialogs';

import './admin-page.css';

const AdminPage = () => {
    return (
        <div>
            <Container>
                <div className="admin-board">
                    <Dialogs/>
                    <MessageBoard role="BANK"/>
                </div>
            </Container>
        </div>
    );
};

export default AdminPage;