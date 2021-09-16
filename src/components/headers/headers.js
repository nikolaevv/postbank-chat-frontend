import React from 'react';

import mainLogo from '../../files/images/logo.png';
import userLogo from '../../files/images/user.png';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './headers.css';
import { Typography } from '@material-ui/core';

const BasicHeader = ({image, title}) => {
    return (
        <header>
            <div className="header-image-box">
                <a href="https://www.pochtabank.ru/">
                    <img className="header-image" src={image}/>
                </a>
            </div>

            <div className="header-title">
                <Typography color="secondary" variant="h4">
                    {title}
                </Typography>
            </div>
        </header>
    );
};

const icon = <AccountCircleIcon color="secondary" fontSize="large" className="message-sender-icon"/>;

const AdminHeader = () => {
    return <BasicHeader image={userLogo} title={"Никита Любимов"}/>
};

const UserHeader = () => {
    return <BasicHeader image={mainLogo} title={"Почта Банк".toUpperCase()}/>
};

export {AdminHeader, UserHeader};