import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  const navList = ["home", "pages", "portfolio", "blog", "elements"];
  return (
    <div className="flex h-screen w-full justify-between items-center flex-col">
      <nav className="bg-[#734AF6] flex h-[78px] w-full justify-between px-5 items-center font-semibold text-white">
        <div className="flex gap-1 items-center">
          <span className="block w-4 bg-green-400 h-4 flex items-center justify-center">
            <span className="block w-2 h-2 bg-green-950 rounded-full"></span>
          </span>
          unplug ui
        </div>

        <ul className="flex gap-3 capitalize">
          {navList.map((val, idx) => (
            <li key={idx}>{val}</li>
          ))}
        </ul>

        <div>
          <FaSearch />
        </div>
      </nav>

      <nav className="border border-mist-300 flex h-[78px] w-full justify-between px-5 items-center font-semibold shadow-xs">
        <div className="flex gap-1 items-center gap-2">
          <span className="block w-4 bg-green-400 h-4 flex items-center justify-center">
            <span className="block w-2 h-2 bg-green-950 rounded-full"></span>
          </span>
          <h2 className="mr-1">unplug ui</h2>
          <div>
            <IoMenuSharp />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="text-[11px] bg-white rounded-[2px] ps-3 py-1"
            />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <CiMail />
          <IoIosNotificationsOutline />
          <div className="w-8 h-8 overflow-hidden rounded-full">
            <img
              src="https://www.wallsnapy.com/img_gallery/naruto-poster-design-anime-hd-wallpaper-430634.jpg"
              alt="naruto"
              className="object-cover"
            />
          </div>
        </div>
      </nav>

      <nav className="bg-[#EE5335] flex h-[78px] w-full justify-between px-5 items-center font-semibold text-white">
        <div className="flex gap-1 items-center">
          <span className="block w-4 bg-green-400 h-4 flex items-center justify-center">
            <span className="block w-2 h-2 bg-green-950 rounded-full"></span>
          </span>
          unplug ui
        </div>

        <ul className="flex gap-3 capitalize items-center">
          {navList.map((val, idx) => (
            <li key={idx}>{val}</li>
          ))}

          <button className="bg-[#F5AB41] px-3 py-2 rounded-[7px] shadow-xl cursor-pointer">
            Get Started Now
          </button>
        </ul>
      </nav>

      <nav className="bg-linear-to-r from-[#273444] to-[#1a202c] flex h-[78px] w-full justify-between px-5 items-center font-semibold text-white">
        <div className="flex gap-1 items-center">
          <span className="block w-4 bg-green-400 h-4 flex items-center justify-center">
            <span className="block w-2 h-2 bg-green-950 rounded-full"></span>
          </span>
          unplug ui
        </div>

        <ul className="flex gap-3 capitalize items-center">
          <FaIdCard className="text-green-600" />
          <FaBasketShopping className="text-yellow-400" />
          <IoMdMail className="text-red-600" />
          <IoIosSettings className="text-sky-600" />

          <div className="flex gap-2 items-center">
            <h2>Hi Rocky John</h2>
            <span className="block bg-purple-600 rounded-xl w-8 h-8 flex items-center justify-center ">
              R
            </span>
          </div>
        </ul>
      </nav>

      <div className="h-[120px] w-full font-semibold text-white bg-[url('https://wallpaperaccess.com/full/527669.jpg')] bg-cover bg-center relative">
        <nav className="px-5 absolute inset-0 bg-black/20 flex items-center justify-between h-[78px] top-0 left-0">
          <div className="flex gap-1 items-center">
            <span className="block w-4 bg-green-400 h-4 flex items-center justify-center">
              <span className="block w-2 h-2 bg-green-950 rounded-full"></span>
            </span>
            unplug ui
          </div>

          <ul className="flex gap-3 capitalize items-center">
            <FaIdCard className="text-green-600" />
            <FaBasketShopping className="text-yellow-400" />
            <IoMdMail className="text-red-600" />
            <IoIosSettings className="text-sky-600" />

            <div className="flex gap-2 items-center">
              <h2>Hi Rocky John</h2>
              <span className="block bg-purple-600 rounded-xl w-8 h-8 flex items-center justify-center ">
                R
              </span>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
