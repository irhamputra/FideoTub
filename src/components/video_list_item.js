import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const ImageUrl = video.snippet.thumbnails.default.url;
    const VideoListTitle = video.snippet.title;
    const VideoListDescription = video.snippet.description;
    console.log(video);

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ImageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{VideoListTitle}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;