import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import './message.css';

const Message = ({sender, text, timestamp}) => {
    return (
        <div className="message" style={{justifyContent: sender === "LEFT" ? "flex-start" : "flex-end"}}>
            {sender === "LEFT" && <HelpIcon fontSize="large" className="message-sender-icon"/>}

            <Card className="message-buble">
                <CardContent>
                    <Typography variant="body2">{text}</Typography>
                </CardContent>
            </Card>
            {sender === "RIGHT" && <AccountCircleIcon fontSize="large" className="message-sender-icon"/>}
        </div>
    );
};

export default Message;