import React, { useEffect, useState } from "react";
import axios from "axios";

//! Shared fetch logic
//? WrappedComponent is not some special React concept — it's a plain variable that happens to hold your inline arrow function. You could rename the parameter to banana and nothing would change
const withProductData = (WrappedComponent, filterFn) => {
  console.log("name: ", WrappedComponent.name);

  const ComponentWithData = (props) => {
    const [data, setData] = useState(null);

    async function fetchData() {
      try {
        let { data } = await axios.get("https://dummyjson.com/products");
        let { products } = data;
        setData(filterFn ? products.filter(filterFn) : products); // filterFn is optional
      } catch (e) {
        console.error(e);
      }
    }

    useEffect(() => {
      fetchData();
    }, []);

    return <WrappedComponent {...props} data={data} />;
  };

  ComponentWithData.displayName = `withProductData(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  console.log("displayName: ", ComponentWithData.displayName);
  return ComponentWithData;
};

export default withProductData;
