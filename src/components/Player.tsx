import React from "react";

type Props = {
  key: number;
  name: string;
  score: number;
  incrementScore: () => void;
};

const Player = (props: Props) => {
  return (
    <li className="Player">
      <p>
        {props.name} (score: {props.score}){" "}
        <button onClick={props.incrementScore}>increment</button>
      </p>
    </li>
  );
};

export default Player;
