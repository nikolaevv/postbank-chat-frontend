import React, {useState} from 'react';
import { _api } from '../consts';
import {_headersBase} from '../methods';

const _apiBase = `${_api}/api/messages`;

const getResource = async (url, params, headers, successCallback = () => {}) => {
    let path_url = new URL(`${_apiBase}${url}`)
    if (params) {
        path_url.search = params;
    }

    const res = await fetch(path_url, {headers: headers});

    if (!res.ok) {
        throw new Error("Could not fetch");
    }

    const body = await res.json();
    await successCallback(body);
    return body;
};

const putResource = async (url, data, headers = _headersBase(), successCallback = () => {}) => {
    let path_url = new URL(`${_apiBase}${url}`)

    const res = await fetch(path_url, {
        headers: headers, 
        method: 'PUT', 
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        throw new Error("Could not fetch");
    }

    const body = await res.json();
    await console.log(body);
    await successCallback(body);
    return body;
};

const postResource = async (url, data, headers = _headersBase(), successCallback = () => {}) => {
    let path_url = new URL(`${_apiBase}${url}`)

    const res = await fetch(path_url, {
        headers: headers, 
        method: 'POST', 
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        throw new Error("Could not fetch");
    }

    const body = await res.json();
    await console.log(body);
    await successCallback(body);
    return body;
};

const useGetMessages = () => {
    const [messages, setMessages] = useState(null);
    
    const getMessages = () => getResource('/', null, null, setMessages);
   
    return [messages, getMessages];
};

const useSendMessage = () => {
    const [message, setMessage] = useState(null);

    const sendMessage = (text, role) => postResource('/', {text: text, role: role}, null, setMessage);
   
    return [message, sendMessage];
};

export {useGetMessages, useSendMessage};