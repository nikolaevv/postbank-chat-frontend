import { Container } from '@material-ui/core';
import React from 'react';
import MessageBoard from '../message-board/message-board';
import { UserHeader } from '../headers/headers';

import './pages.css';

const UserPage = () => {
    return (
        <div className="admin-board-container">
            <UserHeader/>
            <div>
                <Container className="message-board">
                    <MessageBoard full role="USER"/>
                </Container>
            </div>
        </div>
    );
};

export default UserPage;