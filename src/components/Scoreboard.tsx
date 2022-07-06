import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  return (
    <div className="Scoreboard">
      <h1>Player's scores:</h1>
      <ul>
        {players.map((player) => {
          return <Player key={player.id} name={player.name} />;
        })}
      </ul>
      <AddPlayerForm />
    </div>
  );
};

export default Scoreboard;
