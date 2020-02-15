import React, { Component } from 'react';

class VideoReturn extends Component {

  handleClick = () => {
    this.props.selectVideo(this.props.video);
  }

  render () {
    return (
      <div className="video-return" onClick={this.handleClick}>
        <img
          src={this.props.video.snippet.thumbnails.default.url}
          alt={this.props.video.snippet.description}
        />
        <h1 className="video-return-title">{this.props.video.snippet.title}</h1>
      </div>
    );
  }
}

export default VideoReturn;
