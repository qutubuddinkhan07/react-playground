import React from "react";
import { useProducts } from "../context/ProductContext";

const Products = () => {
  const {
    categorizedProducts,
    categorySorts,
    toggleCategorySort,
    getSortedproducts,
  } = useProducts();

  return (
    <div className="p-6">
      {Object.entries(categorizedProducts).map(([category, items]) => {
        // get the sorted array specifically for this category
        const sortedItems = getSortedproducts(category, items);
        const sortDirection = categorySorts[category];

        return (
          <section key={category} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold capitalize">{category}</h2>

              <button
                onClick={() => toggleCategorySort(category)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Sort Title:
                {sortDirection === "asc"
                  ? "A -> Z"
                  : sortDirection === "desc"
                    ? "Z -> A"
                    : "Default"}
              </button>

              <div className="grid grid-cols-1 md-grid-cols-3 gap-4">
                {sortedItems.map((product) => (
                  <div
                    key={product.id}
                    className="border p-4 rounded shadow-sm"
                  >
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-gray-600">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Products;
