import React from 'react';
import './../assets/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img 
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                    alt=""
                />
            </div>
            <div className="header__input">
                <input placeholder="Search" type="text"/>
                <SearchIcon className="header__inputBuuton" />
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="Gurlivleen Singh Kainth"
                    src="https://yt3.ggpht.com/a-/AOh14GgyCO4wpXHHhrvJ5Z8yuzOkPXLaJkj6fgOYQ5Lk5A=s88-c-k-c0xffffffff-no-rj-mo"
                />
            </div>
        </div>
    )
}

export default Header;
