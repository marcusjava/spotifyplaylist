import React, { Component } from "react";
import picture from "../../assets/img/person1.jpg";
import Player from "../Player/Player";

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingUrl: "",
      audio: null,
      playing: false
    };
  }

  playMusic = (preview_url, event) => {
    event.preventDefault();

    let audio = new Audio(preview_url);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playingUrl: preview_url,
        audio,
        playing: true
      });
    } else {
      if (this.state.playingUrl === preview_url) {
        this.state.audio.pause();
        this.setState({ playing: false });
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          playingUrl: preview_url,
          audio
        });
      }
    }
  };
  render() {
    let playlist = this.props.playlist;
    return (
      <div className="col-lg-3 col-md-6 mt-5" id="playlist">
        <div className="card border-primary text-center bg-dark text-white">
          <div className="card-body">
            <img
              src={playlist.imageUrl}
              alt=""
              className="img-fluid rounded-circle w-50 mb-3"
            />
            <h3>{playlist.name}</h3>
            {playlist.songs.map((song, index) => (
              <Player
                song={song}
                key={index}
                playingUrl={this.state.playingUrl}
                playing={this.state.playing}
                onClick={event => this.playMusic(song.preview_url, event)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
