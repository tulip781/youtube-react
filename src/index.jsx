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
    videos: [
      {
        "kind": "youtube#searchResult",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/-0toogg0GJVH3foCOhTiVqaf6Kw\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "dAy7dtCv3o0"
        },
        "snippet": {
          "publishedAt": "2020-02-16T11:05:55.000Z",
          "channelId": "UC7bX_RrH3zbdp5V4j5umGgw",
          "title": "Warm JAZZ - Fireplace &amp; Smooth JAZZ  Music For Stress Relief - Chill Out Music",
          "description": "Thank you for listening: Warm JAZZ - Fireplace & Smooth JAZZ Music For Stress Relief - Chill Out Music PLEASE ▻ SUBSCRIBE! ▻ https://goo.gl/NmmRWe ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/dAy7dtCv3o0/default_live.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/dAy7dtCv3o0/mqdefault_live.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/dAy7dtCv3o0/hqdefault_live.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Relax Music",
          "liveBroadcastContent": "live"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Kjykza8fIOX72ILl-N_Vy_61JFA\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "K3V7YYYeEso"
        },
        "snippet": {
          "publishedAt": "2020-02-17T02:46:39.000Z",
          "channelId": "UCJhjE7wbdYAae1G25m0tHAA",
          "title": "Elegant Tea Jazz - Relaxing Intrumental Jazz Music for Work, Study, Reading - Relax Cafe Music",
          "description": "Please Subscribe! https://www.youtube.com/user/cafemusicbgmchannel Music For Business「Cafe Music BGM Station」 English: https://bgm-station.com/en/ ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/K3V7YYYeEso/default_live.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/K3V7YYYeEso/mqdefault_live.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/K3V7YYYeEso/hqdefault_live.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Cafe Music BGM channel",
          "liveBroadcastContent": "live"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/bBtjyuMtNaCYwmQQQL5q1U5OWJU\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "xlQJdQCVegs"
        },
        "snippet": {
          "publishedAt": "2020-02-16T14:45:58.000Z",
          "channelId": "UCJhjE7wbdYAae1G25m0tHAA",
          "title": "Relaxing Piano Jazz - Elegant Intrumental Jazz Music For Work, Study, Reading",
          "description": "Please Subscribe! https://www.youtube.com/user/cafemusicbgmchannel Music For Business「Cafe Music BGM Station」 English: https://bgm-station.com/en/ ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xlQJdQCVegs/default_live.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xlQJdQCVegs/mqdefault_live.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xlQJdQCVegs/hqdefault_live.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Cafe Music BGM channel",
          "liveBroadcastContent": "live"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/IhTSq_dCPRoJUMMWpyC4c2o7U6Q\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "YWzyLVyflD8"
        },
        "snippet": {
          "publishedAt": "2020-02-16T11:11:05.000Z",
          "channelId": "UC7bX_RrH3zbdp5V4j5umGgw",
          "title": "Elegant Tea Jazz - Relaxing Intrumental JAZZ Music For Work,Study,Reading",
          "description": "Thank you for listening: Elegant Tea Jazz - Relaxing Intrumental JAZZ Music For Work,Study,Reading PLEASE ▻ SUBSCRIBE! ▻ https://goo.gl/NmmRWe This ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YWzyLVyflD8/default_live.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YWzyLVyflD8/mqdefault_live.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YWzyLVyflD8/hqdefault_live.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Relax Music",
          "liveBroadcastContent": "live"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/lCkKqmuejXmI_02j9vfefPAAnzg\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "2Rh26O9LqM4"
        },
        "snippet": {
          "publishedAt": "2020-02-17T10:56:59.000Z",
          "channelId": "UC7bX_RrH3zbdp5V4j5umGgw",
          "title": "Flavored Coffee JAZZ - Relaxing Instrumental JAZZ Music For Work,Study &amp; Stress Relief",
          "description": "Thank you for listening: Flavored Coffee JAZZ - Relaxing Instrumental JAZZ Music For Work,Study & Stress Relief PLEASE ▻ SUBSCRIBE!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2Rh26O9LqM4/default_live.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2Rh26O9LqM4/mqdefault_live.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2Rh26O9LqM4/hqdefault_live.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Relax Music",
          "liveBroadcastContent": "live"
        }
      }
    ],
    selectedVideo: {
        "kind": "youtube#searchResult",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/j0uEstXCXOhrDqDegEBmEeHqsBM\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "YQHsXMglC9A"
        },
        "snippet": {
          "publishedAt": "2015-10-23T06:54:18.000Z",
          "channelId": "UComP_epzeKzvBX156r6pm1Q",
          "title": "Adele - Hello",
          "description": "'Hello' is taken from the new album, 25, out November 20. http://adele.com Available now from iTunes http://smarturl.it/itunes25 Available now from Amazon ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "AdeleVEVO",
          "liveBroadcastContent": "none"
        }
    }
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
      console.log(this.state.videos);
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
