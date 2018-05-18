import React from "react";

export default props => {
  return (
    <div>
      <button
        type="button"
        className="badge badge-secondary"
        onClick={props.onClick}
      >
        {props.song.name}{" "}
        {props.song.preview_url === props.playingUrl ? (
          <span>| |</span>
        ) : (
          <span>&#9654;</span>
        )}
      </button>
    </div>
  );
};
