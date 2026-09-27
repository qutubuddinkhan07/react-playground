import React from "react";
import BellIcon from "../assets/bell-icon.svg?react";
import SearchIcon from "../assets/search-icon.svg?react";
import UserProfile from "../assets/UserProfile.png";

const Navbar = () => {
  const nav_list = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

  return (
    <div className="text-white flex justify-between h-[60px] font-inter items-center absolute top-0 left-0 w-full z-20 px-8 bg-black">
      <div className="flex gap-6 items-center">
        <h1 className="text-xl font-bold text-red-600">MovieFlix</h1>

        <ul className="flex gap-4">
          {nav_list.map((val, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-white text-gray-300"
            >
              {val}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <SearchIcon className="w-4 h-4 cursor-pointer" />
        <BellIcon className="w-4 h-4 cursor-pointer" />
        <img src={UserProfile} alt="User Profile" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Navbar;
