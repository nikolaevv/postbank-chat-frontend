import React, {useEffect, useState, useCallback} from 'react';

import { useSelector } from 'react-redux';
import { useRequest, useMutation } from 'redux-query-react';

import * as selectors from '../../selectors/messages';
import * as messagesQueryConfigs from '../../query-configs/messages';
import Message from '../message';
import moment from 'moment';

import { Grid, Button, FormControl, InputLabel, OutlinedInput, Chip } from '@material-ui/core';
import './message-board.css';

const MessageBoard = ({role}) => {
    const [text, setText] = useState('');
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    useRequest(messagesQueryConfigs.messagesRequest());
    const messages = useSelector(selectors.getMessages);

    const [queryState, sendMessage] = useMutation(optimistic =>
        messagesQueryConfigs.sendMessage(messages, text, role, optimistic),
    );
    
    const submitMessage = useCallback(
        optimistic => {
            sendMessage(optimistic).then(result => {
                if (result !== 200) {
                    setError(result.text);
                }
        
                setStatus(result.status);
            });
        },
        [sendMessage],
    );

    useEffect(() => {
    }, [messages])

    const isPending = messages.length === 0;

    if (isPending) {
        return <div>Loading...</div>
    }

    const last_message_timestamp = messages.length > 0 ? new Date(messages[messages.length - 1].timestamp) : new Date();
    const last_message_date =  moment(messages[messages.length - 1].timestamp).format('ll');

    return (
        <div className="message-board">
            
            <div className="messages">
                {messages.length > 0 && 
                    <div className="last-messaging-date">
                        <Chip className="date-chip" label={last_message_date} />
                    </div>
                }
                
                {
                    messages.map((message) => {
                        const {id, text, sender, timestamp} = message;

                        return <Message
                            key={id}
                            text={text} 
                            timestamp={timestamp} 
                            sender={sender === "BANK" ? "LEFT" : "RIGHT"}
                        />;
                    })
                }
            </div>

            <Grid container className="chat-grid" direction="column" xs={12}>    
                <Grid item xs={10}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Сообщение</InputLabel>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-amount"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            labelWidth={60}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={2}>
                    <Button 
                        style={{marginLeft: '1em', minHeight: '4em', minWidth: '7em'}} 
                        variant="contained" 
                        color="primary" 
                        onClick={() => {
                            submitMessage();
                            setText('');
                        }}

                    >
                        Отправить
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default MessageBoard;