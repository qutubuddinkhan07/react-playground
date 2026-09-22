import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../component/Card";

const BASE_URL = "http://localhost:5000/student";

const ViewAll = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(BASE_URL);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>ViewAll</h1>

      <section className="d-flex flex-wrap justify-content-around">
        {data ? (
          data.map((val, idx) => {
            return <Card data={val} key={idx} fn={fetchData}/>;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </section>
    </div>
  );
};

export default ViewAll;
