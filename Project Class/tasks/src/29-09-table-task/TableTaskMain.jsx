import React, { useState } from "react";
import axios from "axios";
import Table from "./components/Table";

const TableTaskMain = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      // console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = (id) => {
    const filteredData = data.filter((product) => product.id !== id);
    setData(filteredData);
  };

  useState(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <Table data={data} deleteUser={deleteUser} />
    </div>
  );
};

export default TableTaskMain;
