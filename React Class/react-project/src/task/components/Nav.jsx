import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="d-flex p-3 gap-4">
      <NavLink
        to={"/authenticated"}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        Home
      </NavLink>
      <NavLink
        to={"/authenticated/view-all"}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        View All
      </NavLink>
    </nav>
  );
};

export default Nav;
