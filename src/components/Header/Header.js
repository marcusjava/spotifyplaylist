import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let allSongs = this.props.playlist.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <label className="text-white">
              Total {this.props.playlist.length} playlists
            </label>
          </div>
          <div className="col-md-4">
            <label className="text-white">
              Duration {Math.round(totalDuration / 60)} hours
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
