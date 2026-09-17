import React, { useEffect, useState } from "react";

const Qspider = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    if (state) document.title = "JSpider 🕷️";
    else document.title = "QSpider 🕸️";
  }, [state]);
  return (
    <div>
      <h1>{state ? "JSpider 🕷️" : "QSpider 🕸️"}</h1>
      <button onClick={() => setState(!state)}>Change</button>
    </div>
  );
};

export default Qspider;
