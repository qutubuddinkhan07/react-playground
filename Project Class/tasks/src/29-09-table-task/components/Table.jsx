import React, { useEffect, useState } from "react";

const sortBtn = (active) => {
  `px-2 py-0.5 rounded-md text-xs font-medium transition-colors ${
    active
      ? "bg-purple-600 text-white"
      : "bg-purple-100 text-purple-700 hover:bg-purple-200"
  }`;
};

const Table = ({ data, deleteUser }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [interestIds, setInterestIds] = useState([]);

  const handleInterests = (id, isInterested) => {
    if (isInterested) {
      setInterestIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    } else {
      setInterestIds((prev) => prev.filter((item) => item !== id));
    }
  };

  const categoryNames = Array.from(
    new Set(data.map((product) => product.category)),
  );

  const filterProducts = data.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  const displayedProducts = filterProducts.toSorted((a, b) => {
    if (!sortConfig.key) return 0;

    if (sortConfig.key === "title") {
      const titleA = a.title;
      const titleB = b.title;

      return sortConfig.direction === "asc"
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    }

    if (sortConfig.key === "price") {
      return sortConfig.direction === "asc"
        ? a.price - b.price
        : b.price - a.price;
    }

    return 0;
  });

  return (
    <table border="1px" className="table-auto w-full border-collapse">
      <thead>
        <tr className="border-b-3">
          <td>Id</td>
          <td>
            Title
            <div>
              <button
                onClick={() =>
                  setSortConfig({ key: "title", direction: "asc" })
                }
              >
                A-Z
              </button>
              <button
                onClick={() =>
                  setSortConfig({ key: "title", direction: "desc" })
                }
              >
                Z-A
              </button>
            </div>
          </td>
          <td>
            Category
            <div>
              <select
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categoryNames.map((category, idx) => {
                  return (
                    <option key={idx} value={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>
          </td>
          <td>Image</td>
          <td>
            Price
            <div>
              <button
                onClick={() =>
                  setSortConfig({ key: "price", direction: "asc" })
                }
              >
                Low to High
              </button>
              <button
                onClick={() =>
                  setSortConfig({ key: "price", direction: "desc" })
                }
              >
                High to Low
              </button>
            </div>
          </td>
          <td>Rating</td>
          <td>Interest</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {displayedProducts.map((product) => {
          const isInterested = interestIds.includes(product.id);
          return (
            <tr
              key={product.id}
              className={`${isInterested ? "bg-green-200" : ""}`}
            >
              <td>{product.id}</td>
              <td className="max-w-55">{product.title}</td>
              <td>{product.category}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-35 h-25 object-conver"
                />
              </td>
              <td>{product.price}</td>
              <td>{product.rating.rate}</td>
              <td>
                <button
                  className={`px-2 py-1 mr-1 rounded ${isInterested ? "bg-green-500 text-white" : "bg-gray-200"}`}
                  onClick={() => handleInterests(product.id, true)}
                >
                  Yes
                </button>
                <button
                  className={`px-2 py-1 mr-1 rounded ${!isInterested ? "bg-gray-400 text-white" : "bg-gray-200"}`}
                  onClick={() => handleInterests(product.id, false)}
                >
                  No
                </button>
              </td>
              <td>
                <button onClick={() => deleteUser(product.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
