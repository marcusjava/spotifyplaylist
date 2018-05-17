import React, { Component } from "react";
import picture from "../../assets/img/person1.jpg";

class Playlist extends Component {
  constructor(props) {
    super(props);
  }

  playMusic = event => {
    event.preventDefault();
    console.log(event);
  };
  render() {
    let playlist = this.props.playlist;
    return (
      <div className="col-lg-3 col-md-6 mt-4">
        <div className="card border-primary text-center bg-dark text-white">
          <div className="card-body">
            <img
              src={playlist.imageUrl}
              onClick={this.playMusic}
              alt=""
              className="img-fluid rounded-circle w-50 mb-3"
            />
            <h3>{playlist.name}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
