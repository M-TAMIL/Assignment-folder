import React from "react";
import "./TeamHeader.css";

const TeamHeader = (props) => {
  return (
    <header className="team-header">
      <h1>{props.teamName}</h1>
      
    </header>
  );
};

export default TeamHeader;