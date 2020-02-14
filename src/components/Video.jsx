import React, { Component } from 'react';

export default class Video extends Component {
  selectVideoSource () {
    if (this.props.selectedVideo.id) {
      return `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
    }
    return 'https://www.youtube.com/embed/YQHsXMglC9A';
  }

  render() {
    return(
      <div className="video">
        <iframe width="420" height="315"
          src={this.selectVideoSource()}>
        </iframe>
        <div className="description">
          <h3>{this.props.selectedVideo.snippet ? this.props.selectedVideo.snippet.title : 'Hello - Adele'}</h3>
          <p>{this.props.selectedVideo.snippet ? this.props.selectedVideo.snippet.description : ''}</p>
        </div>
      </div>
    );
  }
}
