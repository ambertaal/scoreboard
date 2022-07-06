import React from "react";

type Props = {
  name: string;
  score: number;
};

const Player = (props: Props) => {
  return (
    <li className="Player">
      <p>
        {props.name} (score: {props.score})
      </p>
    </li>
  );
};

export default Player;
