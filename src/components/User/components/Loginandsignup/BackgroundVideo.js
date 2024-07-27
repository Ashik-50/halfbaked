// BackgroundVideo.js
import React from 'react';
import backgroundVideo from './video2.mp4';

const BackgroundVideo = () => (
  <div className="background-video">
    <video autoPlay loop muted>
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default BackgroundVideo;
