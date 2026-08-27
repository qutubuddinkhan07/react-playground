import React, { useState } from "react";

const ThemeChange = () => {
  const [theme, setTheme] = useState(false);
  //   const changeTheme = () => {
  //     setTheme(!theme);
  //   };
  return (
    <div className={theme ? "light" : "dark"}>
      <button className="theme-btn" onClick={() => setTheme(!theme)}>
        {theme ? "Dark 🌚" : "Light ☀️"}
      </button>
    </div>
  );
};

export default ThemeChange;
