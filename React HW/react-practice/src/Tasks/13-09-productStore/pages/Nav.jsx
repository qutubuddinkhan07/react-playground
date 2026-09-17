import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navlist = [
  { list: "home", link: "/" },
  { list: "about", link: "/about" },
  { list: "cart", link: "/cart" },
];

const Nav = () => {
  const location = useLocation();
  const listRef = useRef(null);

  const [pill, setPill] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    const measure = () => {
      const container = listRef.current;

      if (!container) return;

      const activeLink = container.querySelector(
        '[aria-current="page"]'
      );

      if (!activeLink) return;

      const activeItem = activeLink.parentElement;

      const containerRect = container.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      setPill({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
        ready: true,
      });
    };

    requestAnimationFrame(measure);

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Searching for:", search);

    // Add your search logic here
  };

  return (
    <nav className="relative flex h-16 items-center bg-[#c35724] px-6">
      
      {/* Logo */}
      <div className="mr-auto">
        <h1 className="text-lg font-semibold tracking-tight text-[#201002]">
          Logo
        </h1>
      </div>

      {/* Search Bar - Center */}
      <form
  onSubmit={handleSearch}
  className="absolute left-1/2 flex w-[280px] -translate-x-1/2 items-center sm:w-[320px] md:w-[400px]"
>
        <div className="flex w-full items-center rounded-full bg-[#f5d6b8] px-4 py-1.5 shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-[#201002]/30">
          
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="mr-2 h-4 w-4 text-[#201002]/60"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.04 6.04a7.5 7.5 0 0 0 10.61 10.61Z"
            />
          </svg>

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-transparent text-sm text-[#201002] outline-none placeholder:text-[#201002]/50"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="ml-2 rounded-full bg-[#201002] px-3 py-1 text-xs font-medium text-[#e2aa6b] transition-all duration-200 hover:scale-105 hover:bg-[#321806] active:scale-95"
          >
            Search
          </button>
        </div>
      </form>

      {/* Navigation */}
      <ul
        ref={listRef}
        className="relative ml-auto flex items-center gap-1"
      >
        {/* Animated pill */}
        <span
          className="pointer-events-none absolute top-1/2 z-0 h-8 -translate-y-1/2 rounded-full bg-[#201002] transition-all duration-300 ease-out"
          style={{
            left: `${pill.left}px`,
            width: `${pill.width}px`,
            opacity: pill.ready ? 1 : 0,
          }}
        />

        {navlist.map(({ list, link }) => (
          <li
            key={link}
            className="relative z-10"
          >
            <NavLink
              to={link}
              end={link === "/"}
              className={({ isActive }) =>
                [
                  "block rounded-full px-4 py-1.5 text-sm font-medium capitalize no-underline",
                  "transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[#e2aa6b]",
                  "focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-[#c35724]",

                  isActive
                    ? "text-[#e2aa6b]"
                    : "text-[#201002]/70 hover:text-[#201002]",
                ].join(" ")
              }
            >
              {list}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;