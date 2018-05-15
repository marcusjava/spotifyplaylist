import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onKeyUp={event => this.props.onTextChange(event.target.value)}
              />
              <button className="btn btn-primary">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
