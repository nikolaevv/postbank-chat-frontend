import { Container } from '@material-ui/core';
import React from 'react';
import MessageBoard from '../message-board/message-board';

import './app.css';

const App = () => {
    return (
        <div>
            <Container>
                <MessageBoard role="BANK"/>
            </Container>
        </div>
    );
};

export default App;