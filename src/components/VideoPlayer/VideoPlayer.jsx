import React from 'react';
import './VideoPlayer.css';
import video from "/images/pages/SingleServices/interior_video.mp4";


const VideoPlayer = () => {
  return (
    <div className="container">
    <div className="video-player">
      <video controls autoPlay loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
};

export default VideoPlayer;
