import React from 'react';
import './../assets/VideoCard.css';
import { Avatar } from '@material-ui/core';

function VideoCard({ title, thumbnailImage, channelImage, channelName, views, timestamp }) {
    return (
        <div className="videoCard">
            <img
                className="videoCard__thumbnail"
                src={thumbnailImage}
                alt=""
            />
            <div className="videoCard__info">
                <Avatar
                    className="videoCard__infoImage"
                    src={channelImage}
                    alt={channelName}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channelName}</p>
                    <p>{views} views ▪ {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
