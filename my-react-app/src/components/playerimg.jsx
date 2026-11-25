import React from "react";
import "./playerimg.css";

const PlayerImg = (props) => {
  return (
    <img
      className="player-image"
      src={props.playerImgSrc}
      alt={props.playerImgAlt}
    />
  );
};

export default PlayerImg;