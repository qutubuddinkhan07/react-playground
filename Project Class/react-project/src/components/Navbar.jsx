import React from "react";

const Navbar = () => {
  return (
    <nav className="h-19.5 w-screen bg-blue-800 flex justify-between px-14 items-center shadow-xl">
      <h2 className="text-2xl font-bold font-mono  text-white">Logo</h2>

      <ul className="flex w-75 justify-between font-bold text-white capitalize font-mono">
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>service</li>
        <li>help</li>
      </ul>

      <div className="w-35 flex justify-between">
        <button className="bg-mist-200 px-2.5 py-1.3 rounded-xl cursor-pointer hover:scale-110">
          Login
        </button>
        <button className="bg-mist-200 px-2.5 py-1.3 rounded-xl cursor-pointer hover:scale-110">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
