import React, { useState } from "react";
import goku from "../assets/goku.jpg";
import { FaHeart } from "react-icons/fa";

const Card = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [blink, setBlink] = useState(false);

  const handleClick = () => {
    setLikes(likes + 1);
    setLiked(true);
    setBlink(true);
    setTimeout(() => setBlink(false), 350);
  };

  const handleDoubleClick = () => {
    if (likes == 0) return;
    setLikes(likes - 1);
    if (likes - 1 < 1) setLiked(false);
  };
  return (
    <div className="h-90 w-85 overflow-hidden p-3 bg-amber-400 shadow-lg">
      <style>
        {`
            @keyframes heartBlink{
            0%, 100%{opacity:1, transform:scale(1);}
            50%{opacity:0.35;transform:scale(1.35);}
            }
            .heart-blink{
            animation:heartBlink 0.35s ease-in-out;
            }
            `}
      </style>
      <div className="h-75 w-full overflow-hidden  rounded-2xl bg-blue-900">
        <img
          src={goku}
          alt="goku"
          className="w-full h-full object-cover"
          onDoubleClick={handleDoubleClick}
        />
      </div>

      <div className="flex items-center gap-2 mt-3 text-2xl">
        <FaHeart
          className={`cursor-pointer select-none transition-colors duration-200 ${liked ? "text-red-600" : "text-white"} ${blink ? "heart-blink" : ""}`}
          onClick={handleClick}
        />
        <span className="select-none text-base font-medium text-gray-900">
          Likes: {likes}{" "}
        </span>
      </div>
    </div>
  );
};

export default Card;
