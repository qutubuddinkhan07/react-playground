import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currUser, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="flex h-19 bg-pink-500 items-center justify-between px-8">
      <h1 className="text-3xl font-semibold">
        <Link to={"/"}>Logo</Link>
      </h1>

      {isAuthenticated && (
        <div>
          <input
            type="text"
            name="search"
            id="search"
            className="bg-white px-3 py-1 rounded"
            placeholder="Enter the category"
          />
        </div>
      )}

      {currUser ? (
        <div>
          <button
            onClick={handleLogout}
            className="px-3 py-1.5 bg-red-400 hover:bg-red-300 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            to={"/login"}
            className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 rounded cursor-pointer"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 rounded cursor-pointer"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
