import React from "react";

const Card = ({ trendings }) => {
  const { image, title, ratings, genre, star: Star } = trendings;
  return (
    <div className="flex flex-col bg-black rounded-lg overflow-hidden  text-white gap-1">
      <div className="h-[330px] w-[220px]">
        <img src={image} alt="Movie Poster" />
      </div>
      <div>
        <h3 className="text-[15px] font-semibold">{title}</h3>
      </div>

      <div className="flex items-center gap-3 mt-1">
        <div className="flex text-[13px] items-center gap-1 text-[#FBBF24]">
          <Star className="w-4" />
          <span className="font-semibold">{ratings}</span>
        </div>

        <span className="text-xs text-gray-400 capitalize">• {genre}</span>
      </div>
    </div>
  );
};

export default Card;
