import React, { Component } from "react";
import logo from "./logo.svg";
import Aggregate from "./components/Aggregate/Aggregate";
import Filter from "./components/Filter/Filter";
import Playlist from "./components/Playlist/Playlist";

import "./App.css";

let fakeServerData = {
  user: [
    {
      name: "Marcus Vincius",
      songs: [
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
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverData: {}
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 3000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div className="container mx-auto">
            <h1 className="mt-4 text-center text-white">
              {this.state.serverData.user.name}
            </h1>

            <Aggregate />
            <Filter />
            <Playlist
              playlist={
                this.state.serverData.user && this.state.serverData.user.songs
              }
            />
          </div>
        ) : (
          <div>
            <label className="text-white text-center">Loading...</label>
          </div>
        )}
      </div>
    );
  }
}

export default App;
