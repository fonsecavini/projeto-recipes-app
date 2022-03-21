import React from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import propTypes from 'prop-types';
import '../css/details.css';

function Player(props) {
  const { url } = props;
  const opts = {
    height: '180',
    width: '360',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const urlId = getYouTubeID(url);
  // console.log(urlId);
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div data-testid="video" className="player">
      <YouTube
        videoId={ urlId }
        opts={ opts }
        onReady={ onReady }
      />
    </div>
  );
}

Player.propTypes = {
  url: propTypes.string.isRequired,
};
export default Player;
