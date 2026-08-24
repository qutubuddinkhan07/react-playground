import React from "react";
import Card from "./Card";
import Ronaldo from "../assets/ronaldo.jpg";
import alnassr from "../assets/alnassr.png";

const Player = () => {
  let players = {
    name: "Cristiano Ronaldo",
    image: Ronaldo,
    jersey: 7,
    club: "Al-Nassr FC",
    club_img: alnassr,
  };
  return (
    <div>
      <Card players={players} />
    </div>
  );
};

export default Player;
