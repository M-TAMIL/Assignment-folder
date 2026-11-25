import React from "react";
import "./PlayerCard.css";
import PlayerDetails from "./PlayerDetails";
import PlayerImg from "./playerimg";

const PlayerCard = (props) => {
  return (
    <div className="player-card">
      <PlayerImg playerImgSrc={props.playerImgSrc} playerImgAlt={props.playerImgAlt} />
      <PlayerDetails
        name={props.name}
        role={props.role}
        rank={props.rank}
        salary={props.salary}
      />
    </div>
  );
};

export default PlayerCard;