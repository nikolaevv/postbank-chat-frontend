import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import './message.css';

const Message = ({sender, assensment, role, text, timestamp}) => {
    let backgroundColor = '#ecf0f1';
    console.log(sender)
    if (sender === 'RIGHT' && role === 'BANK' && assensment) {
        
        if (assensment > 70) {
            backgroundColor = '#86CC6E';
        }
        else if (assensment < 30) {
            backgroundColor = '#FD6262';
        }
    }

    return (
        <div className="message" style={{justifyContent: sender === "LEFT" ? "flex-start" : "flex-end"}}>
            {sender === "LEFT" && <HelpIcon fontSize="large" className="message-sender-icon"/>}

            <Card style={{backgroundColor: backgroundColor}} className="message-buble">
                <CardContent>
                    <Typography variant="body2">{text}</Typography>
                </CardContent>
            </Card>
            {sender === "RIGHT" && <AccountCircleIcon fontSize="large" className="message-sender-icon"/>}
        </div>
    );
};

export default Message;