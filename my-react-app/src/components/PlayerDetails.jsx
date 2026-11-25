import React from "react";
import "./PlayerDetails.css";

const PlayerDetails = (props) => {
  return (
    <div className="player-details">
      <h3>{props.name}</h3>
      <p>Position: {props.role}</p>
      <p>Rank: {props.rank}</p>
      <p>Salary: ${props.salary.toLocaleString()}</p>
    </div>
  );
};

export default PlayerDetails;