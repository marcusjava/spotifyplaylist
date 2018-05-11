import React, { Component } from "react";
import logo from "./logo.svg";
import Aggregate from "./components/Aggregate/Aggregate";
import Filter from "./components/Filter/Filter";
import Playlist from "./components/Playlist/Playlist";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mx-auto">
          <h1 className="mt-4 text-center text-white">Title</h1>
          <Aggregate />
          <Filter />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default App;
