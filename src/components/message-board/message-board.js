import React, {useEffect, useState, useCallback} from 'react';

import { useSelector } from 'react-redux';
import useInterval from '../../hooks/use-interval';
import ReactStars from 'react-stars'
import { useRequest, useMutation } from 'redux-query-react';

import * as selectors from '../../selectors/messages';
import * as messagesQueryConfigs from '../../query-configs/messages';
import Message from '../message';
import moment from 'moment';

import { Grid, Button, FormControl, InputLabel, OutlinedInput, Chip, Card, CardActions, CardContent, Typography, Backdrop } from '@material-ui/core';
import './message-board.css';

const scrollToBottomOfChat = () => {
    const obj = document.getElementsByClassName('messages')[0];
    if (obj) {
        obj.scrollTop = obj.scrollHeight;
    }
};

const MessageBoard = ({role, full}) => {
    const [text, setText] = useState('');
    const [requestStatus, setRequestStatus] = useState(null);
    const [error, setError] = useState(null);
    const [isStarred, setStarred] = useState(false);
    const [isStarring, setStarring] = useState(true);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const messages = useSelector(selectors.getMessages);
    const [{isPending, status}, refresh] = useRequest(messagesQueryConfigs.messagesRequest());

    useInterval(refresh, 1000);

    const [queryState, sendMessage] = useMutation(optimistic =>
        messagesQueryConfigs.sendMessage(messages, text, role, optimistic),
    );
    
    const submitMessage = useCallback(
        optimistic => {
            sendMessage(optimistic).then(result => {
                if (result !== 200) {
                    setError(result.text);
                }
                setRequestStatus(result.status);
            });
        },
        [sendMessage],
    );

    useEffect(() => {
        scrollToBottomOfChat();
    }, [messages.length])

    useEffect(() => {
        if (!isStarred && messages.length > 0 && messages[messages.length - 1].sender === 'USER' && messages[messages.length - 1].assensment > 70 && role === 'USER') {
            setOpen(true);
            setStarred(true);
        }
    }, [messages.length, isStarred, messages, role])

    if (messages.length === 0) {
        return <div>Loading...</div>
    }

    //const last_message_timestamp = messages.length > 0 ? new Date(messages[messages.length - 1].timestamp) : new Date();
    const last_message_date = moment(messages[messages.length - 1].timestamp).format('ll');

    return (
        <div className="message-board-root" style={full && {width: "100%"}}>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 5 }}
                open={open}
                style={{zIndex: 3}}
                onClick={handleClose}>

                <Card className="notification-container">
                    <CardContent>
                        <Typography variant="body1">
                            ?????????????? ???????????? ???????????? ??????????????????
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {isStarring && <ReactStars
                            count={5}
                            onChange={() => {}}
                            size={24}
                            color2={'#ffd700'}/>
                        }
                    </CardActions>
                </Card>
            </Backdrop>
            
            <div className="messages">
                {messages.length > 0 && 
                    <div className="last-messaging-date">
                        <Chip className="date-chip" label={last_message_date} />
                    </div>
                }
                
                {
                    messages.map((message) => {
                        const {id, text, sender, timestamp, assensment} = message;

                        return <Message
                            key={id}
                            text={text} 
                            timestamp={timestamp}
                            assensment={assensment}
                            role={role}
                            sender={sender === "BANK" ? "LEFT" : "RIGHT"}
                        />;
                    })
                }
            </div>

            <Grid container className="chat-grid" direction="column" xs={12}>    
                <Grid item xs={10}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">??????????????????</InputLabel>
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
                        ??????????????????
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default MessageBoard;