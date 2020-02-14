import React, { Component } from 'react';

import  VideoReturn  from './video-return.jsx';

export default class VideoRecList extends Component {
  render() {
    return(
      <div className="video-rec-list">
        {this.props.videos.map((video) => {
          return <VideoReturn video={video} key={video.id.videoId} selectVideo={this.props.selectVideo} />
        })}
      </div>
    );
  }
}
