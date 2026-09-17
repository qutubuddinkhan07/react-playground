import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = (props) => {
  // console.log(props)
  const { searchInp, setSearchInp } = props;
  return (
    <div className="h-13 px-9 bg-pink-700 flex items-center justify-evenly">
      <div className="mr-auto font-medium text-2xl font-style:sans-serif">Logo</div>
      <div className="flex gap-3 items-center">
        <input
          type="text"
          placeholder="Search here"
          name="search"
          id="search"
          value={searchInp}
          onChange={(e) => setSearchInp(e.target.value)}
          className="bg-white text-lg px-1.5 rounded-lg outline-none focus:ring-2 focus:ring-pink-900 focus:ring-offset-2"
        />
        <label htmlFor="search" className="cursor-pointer">
          <FaSearch />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
