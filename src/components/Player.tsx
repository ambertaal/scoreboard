import React from "react";

type Props = {
  name: string;
};

const Player = (props: Props) => {
  return (
    <li className="Player">
      <p>{props.name}</p>
    </li>
  );
};

export default Player;
