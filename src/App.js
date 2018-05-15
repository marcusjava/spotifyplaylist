import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Playlist from "./components/Playlist/Playlist";
import queryString from "query-string";

import "./App.css";

let fakeServerData = {
  user: {
    name: "Marcus Vinicius",
    playlists: [
      {
        name: "My favorites",
        songs: ["Beat It", "kink reggae", "Santa kaya"]
      },
      { name: "Only Hip Hop", songs: ["2PAC", "NAS", "Vida loka parte2"] },
      { name: "Study", songs: ["Beat It", "kink reggae", "Santa kaya"] },
      { name: "Night", songs: ["Beat It", "kink reggae", "Santa kaya"] },
      { name: "Relax", songs: ["Beat It", "kink reggae", "Santa kaya"] },
      { name: "Relax", songs: ["Beat It", "kink reggae", "Santa kaya"] }
    ]
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ""
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken) {
      window.location.reload;
    }
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken }
    })
      .then(response => response.json())
      .then(data => this.setState({ user: { name: data.id } }));

    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: { Authorization: "Bearer " + accessToken }
    })
      .then(response => response.json())
      .then(playlistData => {
        let playlists = playlistData.items;
        let trackDataPromises = playlists.map(playlist => {
          let responsePromise = fetch(playlist.tracks.href, {
            headers: { Authorization: "Bearer " + accessToken }
          });
          let trackDataPromise = responsePromise.then(response =>
            response.json()
          );
          return trackDataPromise;
        });
        let allTrackDataPromises = Promise.all(trackDataPromises);
        let playlistsPromise = allTrackDataPromises.then(trackDatas => {
          trackDatas.forEach((trackData, i) => {
            playlists[i].trackDatas = trackData.items
              .map(item => item.track)
              .map(trackData => ({
                name: trackData.name,
                duration: trackData.duration_ms / 1000
              }));
          });
          return playlists;
        });
        return playlistsPromise;
      })
      .then(playlists =>
        this.setState({
          playlists: playlists.map(item => {
            return {
              name: item.name,
              imageUrl: item.images[0].url,
              songs: item.trackDatas.slice(0, 3)
            };
          })
        })
      );
  }
  render() {
    let playlistToRender =
      this.state.user && this.state.playlists
        ? this.state.playlists.filter(playlist => {
            let matchesPlaylist = playlist.name
              .toLowerCase()
              .includes(this.state.filterString.toLowerCase());
            let matchesSong = playlist.songs.find(song =>
              song.name
                .toLowerCase()
                .includes(this.state.filterString.toLowerCase())
            );
            return matchesPlaylist || matchesSong;
          })
        : [];
    return (
      <div className="App">
        {this.state.user ? (
          <div className="container mx-auto">
            <h1 className="mt-4 text-center text-white">
              {this.state.user.name} Playlists
            </h1>

            <Header playlist={playlistToRender} />
            <Filter
              onTextChange={text => {
                this.setState({ filterString: text });
              }}
            />
            <div className="row">
              {playlistToRender.map((playlist, index) => (
                <Playlist key={index} playlist={playlist} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto">
            <button
              className="btn btn-primary text-white"
              onClick={() => {
                window.location = window.location.href.includes("localhost")
                  ? "http://localhost:8888/login"
                  : "https://better-playlists-backend.herokuapp.com/login";
              }}
            >
              Sign in to Spotify
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
