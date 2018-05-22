import React, { Component } from "react";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: "",
      playingUrl: "",
      playing: false
    };
  }

  componentDidMount() {
    this.setState({
      song: this.props.song,
      playingUrl: this.props.playingUrl,
      playing: this.props.playing
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      song: nextProps.song,
      playingUrl: nextProps.playingUrl,
      playing: nextProps.playing
    });
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="badge badge-secondary"
          onClick={this.props.onClick}
        >
          {this.state.song.name}{" "}
          {this.state.song.preview_url === this.state.playingUrl &&
          this.state.playing ? (
            <span>| |</span>
          ) : (
            <span>&#9654;</span>
          )}
        </button>
      </div>
    );
  }
}

export default Player;
