import React from 'react';

import { Paper, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './dialogs.css';

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-area">
            <Paper square>
                <div className="dialog-box">
                    <AccountCircleIcon fontSize="large" className="message-sender-icon"/>
                    <Typography variant="body2">Василий Смоляр</Typography>
                </div>
            </Paper>
            <Paper square>
                <div className="dialog-box">
                    <AccountCircleIcon fontSize="large" className="message-sender-icon"/>
                    <Typography variant="body2">Василий Смоляр</Typography>
                </div>
            </Paper>
            <Paper square>
                <div className="dialog-box">
                    <AccountCircleIcon fontSize="large" className="message-sender-icon"/>
                    <Typography variant="body2">Василий Смоляр</Typography>
                </div>
            </Paper>
            </div>
        </div>
    );
};

export default Dialogs;