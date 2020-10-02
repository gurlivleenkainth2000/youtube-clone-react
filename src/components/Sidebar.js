import React from 'react';
import './../assets/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarOption selected optionName="Home" Icon={HomeIcon} />
            <SidebarOption optionName="Trending" Icon={WhatshotIcon} />
            <SidebarOption optionName="Subscriptions" Icon={SubscriptionsIcon} />
            <hr />
            <SidebarOption optionName="Library" Icon={VideoLibraryIcon} />
            <SidebarOption optionName="History" Icon={HistoryIcon} />
            <SidebarOption optionName="Your Videos" Icon={OndemandVideoIcon} />
            <SidebarOption optionName="Watch Later" Icon={WatchLaterIcon} />
            <SidebarOption optionName="Liked Videos" Icon={ThumbUpIcon} />
            <SidebarOption optionName="Programming Playlist" Icon={PlaylistPlayIcon} />
            <SidebarOption optionName="Show More" Icon={ExpandMoreIcon} />
            <hr />
        </div>
    )
}

export default Sidebar;
