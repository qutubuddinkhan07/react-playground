import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const AllProducts = () => {
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      let { data } = await axios.get("https://dummyjson.com/products");
      let { products } = data;
      setData(products);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <section className="flex flex-wrap gap-4 p-4">
        {data ? (
          data.map((val) => {
            // console.log(val);
            return (
              <div key={val.id}>
                <Card title={val.title} image={val.images[0]} />
              </div>
            );
          })
        ) : (
          <h1>No data</h1>
        )}
      </section>
    </div>
  );
};

export default AllProducts;
