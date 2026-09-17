import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const links = [
  { to: "/", label: "all products" },
  { to: "/beauty", label: "beauty" },
  { to: "/groceries", label: "groceries" },
];

const Nav = () => {
  const navigate = useNavigate();
  const linkClass = (state) =>
    `capitalize px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
      state.isActive ? "bg-white text-blue-600" : "text-white hover:bg-blue-400"
    }`;
  return (
    <div className="flex items-center justify-between bg-blue-500 text-white h-14 px-5 shadow-md">
      <div className="flex gap-2">
        {links.map((link) => {
          return (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-white/90 hover:bg-blue-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>
    </div>
  );
};

export default Nav;
