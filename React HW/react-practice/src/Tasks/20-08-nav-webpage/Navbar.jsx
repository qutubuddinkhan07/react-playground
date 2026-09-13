import React from "react";
import NavBarStyle from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={NavBarStyle.home}>
        <div className={NavBarStyle.navbar}>
        <h1>React</h1>
        <div className={NavBarStyle.navlinks}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>

          <button>Sign Up</button>
        </div>
      </div>

      <div className={NavBarStyle.hero}>
        <h2>React Navbar</h2>
        <p>Difficulty Level: 1</p>
      </div>
      </div>
    </>
  );
};

export default Navbar;
