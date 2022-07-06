import React, { useState } from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm";
import "./Scoreboard.scss";

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

  const reset = () => {
    setPlayers(
      players.map((player) => {
        return {
          ...player,
          score: 0,
        };
      })
    );
  };

  const incrementAllScores = () => {
    setPlayers(
      players.map((player) => {
        return {
          ...player,
          score: player.score + 1,
        };
      })
    );
  };

  const randomize = () => {
    setPlayers(
      players.map((player) => {
        return {
          ...player,
          score: Math.floor(Math.random() * 100),
        };
      })
    );
  };

  // Defining the callback function:
  const incrementScore = (id: number) => {
    const updatedPlayersArray = players.map((player) => {
      // decide whether this player's score needs to be incremented
      if (player.id === id) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          // and then overriding the score property to be incremented
          score: player.score + 1,
        };
      } else {
        // else, just keep them
        return player;
      }
    });
    setPlayers(updatedPlayersArray);
  };

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
        </select>{" "}
        - <button onClick={reset}>reset scores</button> -{" "}
        <button onClick={randomize}>randomize scores</button> -{" "}
        <button onClick={incrementAllScores}>increment all scores</button>
      </p>
      <h1>Player's scores:</h1>
      <ul>
        {playersSorted.map((player) => {
          return (
            <Player
              key={player.id}
              name={player.name}
              id={player.id}
              score={player.score}
              // Passing it down as a prop
              incrementScore={() => {
                incrementScore(player.id);
              }}
            />
          );
        })}
      </ul>
      <AddPlayerForm />
    </div>
  );
};

export default Scoreboard;
