import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

type PlayerObj = {
  id: number;
  name: string;
  score: number;
};

function compareByScore(playerA: PlayerObj, playerB: PlayerObj) {
  return playerB.score - playerA.score;
}

function compareByName(playerA: PlayerObj, playerB: PlayerObj) {
  return playerA.name.localeCompare(playerB.name);
}

const Scoreboard = () => {
  const [sortBy, setSortBy] = useState("score"); // either "score" or "name"

  const [players, setPlayers] = useState<PlayerObj[]>([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const playersSorted = [...players].sort(
    sortBy === "name" ? compareByName : compareByScore
  );

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
          value={sortBy}
        >
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <h1>Player's scores:</h1>
      <ul>
        {playersSorted.map((player) => {
          return (
            <Player key={player.id} name={player.name} score={player.score} />
          );
        })}
      </ul>
      <AddPlayerForm />
    </div>
  );
};

export default Scoreboard;
