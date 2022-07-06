import React from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

const Scoreboard = () => {
  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <ul>
        <Player name="Violeta" />
        <Player name="Eszter" />
        <Player name="Jeroen v2" />
        <Player name="Lisa" />
      </ul>
      <AddPlayerForm />
    </div>
  );
};

export default Scoreboard;
