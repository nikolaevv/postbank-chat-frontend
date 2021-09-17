import React from 'react';

import mainLogo from '../../files/images/logo.png';
import userLogo from '../../files/images/user.png';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './headers.css';
import { Typography, Container } from '@material-ui/core';

const BasicHeader = ({image, title, typographyStyle}) => {
    return (
        <header>
            <Container>
                <div className="header">
                    <div className="header-image-box">
                        <a href="https://www.pochtabank.ru/">
                            <img className="header-image" src={image} alt="logo"/>
                        </a>
                    </div>

                    <div className="header-title">
                        <Typography style={typographyStyle} color="secondary" variant="h4">
                            {title}
                        </Typography>
                    </div>
                </div>
            </Container>
        </header>
    );
};

const icon = <AccountCircleIcon color="secondary" fontSize="large" className="message-sender-icon"/>;

const AdminHeader = () => {
    return <BasicHeader image={userLogo} title={"Никита Любимов"}/>
};

const UserHeader = () => {
    return <BasicHeader image={mainLogo} title={"Почта Банк".toUpperCase()} typographyStyle={{fontWeight: 900}}/>
};

export {AdminHeader, UserHeader};