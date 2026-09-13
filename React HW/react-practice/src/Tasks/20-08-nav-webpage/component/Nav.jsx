import React from "react";
import navStyle from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={"navbar navbar-expand-lg bg-warning"}>
      <div className="container-fluid">
        <a href="#" className="navbar-brand">Lorem</a>

        <ul className="navbar-nav me-auto flex-row">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link" href="#">Lorem</a>
          </li>
        </ul>

        <button className="btn btn-outline-dark" type="button">Login</button>
      </div>
    </nav>
  );
};

export default Nav;
