import React from 'react';
import './../assets/Body.css';
import VideoCard from './VideoCard';

function Body() {
    return (
        <div className="body">
            <h3>Videos</h3>
            <div className="body__videoCardContainer">
                <VideoCard 
                    channelImage="https://yt3.ggpht.com/a/AATXAJzD2mCg0LPx8_5qMmvfxz2kUbVvwHp94EjyG64COg=s88-c-k-c0xffffffff-no-rj-mo"
                    channelName="BB Ki Vines"
                    title="BB Ki Vines- | ManglooSutra"
                    thumbnailImage="https://i.ytimg.com/vi/BslKbJkOm98/maxresdefault.jpg"
                    views="87M"
                    timestamp="3 months ago"
                />
                <VideoCard 
                    channelImage="https://yt3.ggpht.com/a-/AOh14GjLyuv9nqmJAQr0ZCJ1LcnY-nYpFhO-jrpBKw=s68-c-k-c0x00ffffff-no-rj-mo"
                    channelName="Troll Punjabi"
                    title="Yaar Jigree Kasooti Degree Season 2 | Episode 1 - HOSTEL | Latest Punjabi Web Series 2020"
                    thumbnailImage="https://i.ytimg.com/vi/FxrW3dqbVl4/maxresdefault.jpg"
                    views="5.8M"
                    timestamp="2 days ago"
                />
                <VideoCard 
                    channelImage="https://yt3.ggpht.com/a/AATXAJzOcyc2UwB0vlV7SyfzwgU_La1FOFZmObW3HCH0VzM=s100-c-k-c0xffffffff-no-rj-mo"
                    channelName="T-Series"
                    title="Baby Girl | Guru Randhawa Dhvani Bhanushali | Remo D'Souza | Bhushan Kumar"
                    thumbnailImage="https://i.ytimg.com/vi/pLhNdJNwGC8/maxresdefault.jpg"
                    views="15M"
                    timestamp="1 day ago"
                />
                <VideoCard 
                    channelImage="https://yt3.ggpht.com/a/AATXAJwZGPuuePGI6Mr887w6f6ZxsnoDl-Xf10gKPKIOeg=s100-c-k-c0xffffffff-no-rj-mo"
                    channelName="Ashish Chanchlani Vines"
                    title="Office Exam Aur Vaccine | Ashish Chanchlani"
                    thumbnailImage="https://i.ytimg.com/vi/Zr3PukaVXFo/maxresdefault.jpg"
                    views="21M"
                    timestamp="5 days ago"
                />
                <VideoCard 
                    channelImage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s100-c-k-c0xffffffff-no-rj-mo"
                    channelName="Clever Programmer"
                    title="🔴 Let's Build a GOOGLE Clone with REACT JS for Beginners!"
                    thumbnailImage="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
                    views="92K"
                    timestamp="Streamed 1 month ago"
                />
            </div>
        </div>
    )
}

export default Body;
