import React from 'react';

import logo from '../../files/images/logo.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './headers.css';
import { Typography } from '@material-ui/core';

const BasicHeader = ({image, title}) => {
    return (
        <header>
            <div className="header-image-box">
                {image}
            </div>

            <div className="header-title">
                <Typography variant="h4">
                    {title}
                </Typography>
            </div>
        </header>
    );
};

const icon = <AccountCircleIcon fontSize="large" className="message-sender-icon"/>;

const AdminHeader = () => {
    return <BasicHeader image={icon} title={"Никита Любимов"}/>
};

const UserHeader = () => {
    return <BasicHeader image={logo} title={"Почта Банк"}/>
};

export {AdminHeader, UserHeader};