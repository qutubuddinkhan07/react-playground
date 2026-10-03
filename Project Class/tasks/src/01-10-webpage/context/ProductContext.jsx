import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(undefined);

const BASE_URL = "https://fakestoreapi.com/products";

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchProduct, setSearchProducts] = useState("");

  // Store sort direction ("asc", "desc", or null) per category
  // Example state: { "men's clothing": "asc", "electronics": "desc" }
  const [categorySorts, setCategorySorts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(BASE_URL);
      setData(data);
    };

    fetchData();
  }, []);

  // Filter data by search query (using includes for partial matching)
  const filterProducts = data?.filter((product) =>
    product.title.toLowerCase().includes(searchProduct.toLowerCase),
  );

  // Group filtered items by category
  const categorizedProducts = Object.groupBy(
    data,
    (product) => product.category,
  );

  // Helper function to toggle sort for a specific category
  const toggleCategorySort = (category) => {
    setCategorySorts((prev) => {
      const currentDirection = prev[category];
      let nextDirection = "asc";

      if (currentDirection === "asc") nextDirection = "desc";
      else if (currentDirection === "desc") nextDirection = null;

      return { ...prev, [category]: nextDirection };
    });
  };

  const getSortedproducts = (category, items = []) => {
    const direction = categorySorts[category];
    if (!direction) return items;

    return items.toSorted((a, b) => {
      if (direction === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  };

  const value = {
    categorizedProducts,
    searchProduct,
    setSearchProducts,
    categorySorts,
    toggleCategorySort,
    getSortedproducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProducts must be used inside the ProductProvider");
  }

  return context;
};
