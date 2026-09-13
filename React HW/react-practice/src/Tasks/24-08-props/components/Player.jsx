import React from "react";
import Card from "./Card";
import Ronaldo from "../assets/ronaldo.jpg";
import alnassr from "../assets/alnassr.png";

const Player = () => {
  let player = {
    player_name: "Cristiano Ronaldo",
    player_image: Ronaldo,
    player_jersey: 7,
    player_club: "Al-Nassr FC",
    player_club_img: alnassr,
  };
  return (
    <div>
      <Card player={player} />
    </div>
  );
};

export default Player;
