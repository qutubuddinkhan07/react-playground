import React from "react";
import { Link } from "react-router-dom";

const ProductNav = () => {
  return (
    <div className="bg-blue-900 h-14 flex p-3 items-center">
      <div className="mr-auto">
        <h1 className="text-2xl text-white font-medium">Logo</h1>
      </div>

      <ul className="flex gap-4 text-white">
        <li>
          <Link
            to={"/"}
            className="inline-block transition-transform hover:scale-125"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className="inline-block transition-transform hover:scale-125"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={"/cart"}
            className="inline-block transition-transform hover:scale-125"
          >
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductNav;
