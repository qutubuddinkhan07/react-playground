import React from "react";
import Card from "./Card";

//! Shared Presentation UI
const ProductList = ({ data, title }) => {
  return (
    <div>
      <h1>{title}</h1>

      <section className="flex flex-wrap gap-4 p-4">
        {data ? (
          data.map((val) => {
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

export default ProductList;
