import React, { Component } from "react";
import picture from "../../assets/img/person1.jpg";

class Playlist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let playlist = this.props.playlist;
    return (
      <div className="col-lg-3 col-md-6 mt-4">
        <div className="card border-primary text-center">
          <div className="card-body">
            <img
              src={playlist.imageUrl}
              alt=""
              className="img-fluid rounded-circle w-50 mb-3"
            />
            <h3>{playlist.name}</h3>

            <div className="d-flex flex-row justify-content-center">
              <ul>
                {playlist.songs.map((song, index) => (
                  <li key={index}>{song.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
