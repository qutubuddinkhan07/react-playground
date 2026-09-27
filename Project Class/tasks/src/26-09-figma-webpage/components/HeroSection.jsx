import React from "react";
import Hero from "../assets/Hero Background.jpg";
import PlayBtn from "../assets/playBtn.svg?react";
import InfoIcon from "../assets/info.svg?react";

const HeroSection = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat font-inter relative"
      style={{ backgroundImage: `url(${Hero})` }}
    >
        {/* adding overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/60 pointer-events-none"/>
      <div className="max-w-[600px] absolute z-10 top-1/3 left-8 sm:left-12 space-y-3">
        <h2 className="text-white text-4xl sm:text-6xl tracking-tight font-bold drop-shadow-md">
          STELLAR WARS: THE REBELLION
        </h2>

        <div className="flex items-center gap-3 text-sm font-light">
          <span className="text-[#46D369] font-bold">98% Match</span>
          <span className="text-[#A3A3A3]">2024</span>
          <span className="text-[#A3A3A3] border border-[#A3A3A3]/40 px-1.5 py-0.5 text-xs">16+</span>
          <span className="text-[#46D369]">2h 14m</span>
          <span className="text-[#A3A3A3] border px-1.5 py-0.5 border-[#A3A3A3]/40 text-xs">4K HDR</span>
        </div>

        <p className="text-gray-200 font-light text-sm sm:text-base leading-relaxed drop-shadow-sm line-clamp-3">
          In a galaxy torn apart by war, a lone warrior must rise to lead are
          bellion against the tyrannical empire before hope is extinguished
          forever.
        </p>

        <div className="flex items-center gap-3 pt-2">
          <div className="text-black bg-white flex gap-1 items-center px-6 py-2.5 rounded hover:bg-white/80 transition-colors shadow-md cursor-pointer">
            <PlayBtn /> Play
          </div>
          <div className="text-white bg-[#6D6D6EB2] flex gap-1.5 items-center px-6 py-2.5 rounded hover:bg-[#6D6D6E]/60 transition-colors shadow-md cursor-pointer">
            <InfoIcon /> More info
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
