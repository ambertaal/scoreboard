import React from "react";
import "./Player.scss";

type Props = {
  id: number;
  key: number;
  name: string;
  score: number;
  incrementScore: () => void;
};

const Player = (props: Props) => {
  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {props.name} (score: {props.score}){" "}
        <button onClick={props.incrementScore}>increment</button>
      </p>
    </li>
  );
};

export default Player;
