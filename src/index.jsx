import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import SearchBar from './components/SearchBar';
import VideoHolder from './components/VideoHolder';
import VideoRecList from './components/VideoRecList';
import KEY from './api/key';

// import  youtube from './api/youtube_api.jsx';

import '../assets/stylesheets/application.scss';


class App extends Component {
  state = {
    videos: [],
    selectedVideo: 'HELLLLOOO'
  }

  fetchState = (term) => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      }
    }).then((response) => {
      this.setState({ videos: response.data.items });
      // console.log(this.state.videos);
    });
  }

  selectVideo = (video) => {
    console.log(video);
    this.setState({ selectedVideo: video });
  }

  render () {
    return (
      <div className="app">
        <SearchBar className="search-bar" fetchState={this.fetchState}/>
        <div className="video-wrapper">
          <VideoHolder selectedVideo={this.state.selectedVideo}/>
          <VideoRecList videos={this.state.videos} selectVideo={this.selectVideo} />

        </div>
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App name="World" />, root);
}
