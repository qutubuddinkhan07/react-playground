import React, { useState } from "react";
import ListRendering from "./ListRendering";
import Navbar from "./Navbar";

const ListRenderingMain = () => {
  const [searchInp, setSearchInp] = useState("");

  return (
    <div className="min-h-screen w-full bg-amber-500">
      <Navbar searchInp={searchInp} setSearchInp={setSearchInp} />
      <ListRendering searchInp={searchInp} />
    </div>
  );
};

export default ListRenderingMain;
