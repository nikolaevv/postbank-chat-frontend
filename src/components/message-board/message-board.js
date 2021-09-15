import React, {useEffect, useState} from 'react';

import { useSelector } from 'react-redux';
import { useRequest, useMutation } from 'redux-query-react';

import * as selectors from '../../selectors/messages';
import * as messagesQueryConfigs from '../../query-configs/messages';
import Message from '../message';

import { Grid, Button, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import './message-board.css';

const MessageBoard = () => {
    const [text, setText] = useState('');
    const [status, setStatus] = React.useState(null);
    const [error, setError] = React.useState(null);

    useRequest(messagesQueryConfigs.messagesRequest());
    const messages = useSelector(selectors.getMessages);

    useEffect(() => {
        console.log('aa')
        console.log(messages);
    }, [messages])

    const isPending = messages.length === 0;

    if (isPending) {
        return <div>Loading...</div>
    }

    return (
        <div className="message-board">
            <div className="messages">
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
                            /* startAdornment={<InputAdornment position="start">$</InputAdornment>} */
                            labelWidth={60}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={2}>
                    <Button style={{marginLeft: '1em', minHeight: '4em', minWidth: '7em'}} variant="contained" color="primary" onClick={() => {

                    }}>
                        Отправить
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default MessageBoard;