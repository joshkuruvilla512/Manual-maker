import "node_modules/video-react/dist/video-react.css"; // import css
import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src='client/src/components/images/ManualMaker.mp4'
    />
  );
};