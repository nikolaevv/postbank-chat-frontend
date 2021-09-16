import { Container } from '@material-ui/core';
import React from 'react';
import MessageBoard from '../message-board/message-board';
import Dialogs from '../dialogs/dialogs';
import { UserHeader } from '../headers/headers';

import './pages.css';

const UserPage = () => {
    return (
        <Container>
            <div className="admin-board-container">
                    <UserHeader/>
                    
                    <div className="admin-board">
                        <MessageBoard full role="USER"/>
                    </div>
            </div>
        </Container>
    );
};

export default UserPage;