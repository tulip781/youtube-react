import React, { Component } from 'react';

import Video from './Video';


export default class VideoHolder extends Component {
  render() {
    return(
      <div className="video-holder">
        <Video selectedVideo={this.props.selectedVideo} />
        <div className="description">
          <h3>{this.props.selectedVideo.snippet ? this.props.selectedVideo.snippet.title : 'Hello - Adele'}</h3>
          <p>{this.props.selectedVideo.snippet ? this.props.selectedVideo.snippet.description : ''}</p>
        </div>
      </div>
    );
  }
}
