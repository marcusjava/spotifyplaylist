import React, { Component } from "react";
import picture from "../../assets/img/person1.jpg";

class Playlist extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6 mt-4">
        <div className="card border-primary text-center">
          <div className="card-body">
            <img
              src={picture}
              alt=""
              className="img-fluid rounded-circle w-50 mb-3"
            />
            <h3>Susan Willams</h3>
            <h5 className="text-muted">Lead Writer</h5>
            <p>
              Zombie ipsum reversus ab viral inferno, nam rick grimes malum
              cerebro. De carne lumbering animata corpora quaeritis. Summus
              brains sit​​.
            </p>
            <div className="d-flex flex-row justify-content-center">
              <div className="p-4">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </div>
              <div className="p-4">
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </div>
              <div className="p-4">
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
