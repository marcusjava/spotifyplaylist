import React, { Component } from "react";

class Aggregate extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <label className="text-white">Total List</label>
          </div>
          <div className="col-md-4">
            <label className="text-white">Duration Time</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Aggregate;
