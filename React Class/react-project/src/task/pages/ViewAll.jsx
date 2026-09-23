import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000";

const ViewAll = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const { data } = await await axios.get(`${BASE_URL}/student`);
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>ViewAll</h1>
      {data ? (
        data.map((val) => {
          return (
            <div key={val.id}>
              <p>{val.email}</p>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ViewAll;
