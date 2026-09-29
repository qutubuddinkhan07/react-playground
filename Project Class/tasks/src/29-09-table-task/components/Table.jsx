import React, { useEffect, useState } from "react";

const sortBtn = (active) =>
  `px-2 py-0.5 rounded-md text-xs font-medium transition-colors ${
    active
      ? "bg-purple-600 text-white"
      : "bg-purple-100 text-purple-700 hover:bg-purple-200"
  }`;

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

  const isActive = (key, direction) =>
    sortConfig.key === key && sortConfig.direction === direction;

  const th = "px-4 py-3 text-left align-top font-semibold";

  return (
    <div className="overflow-x-auto rounded-xl border border-purple-200 shadow-md">
      <table className="w-full border-collapse bg-white text-sm text-gray-700">
        <thead className="bg-purple-700 text-white">
          <tr>
            <th className={th}>Id</th>
            <th className={th}>
              Title
              <div className="mt-2 flex gap-1">
                <button
                  className={sortBtn(isActive("title", "asc"))}
                  onClick={() =>
                    setSortConfig({ key: "title", direction: "asc" })
                  }
                >
                  A-Z
                </button>
                <button
                  className={sortBtn(isActive("title", "desc"))}
                  onClick={() =>
                    setSortConfig({ key: "title", direction: "desc" })
                  }
                >
                  Z-A
                </button>
              </div>
            </th>
            <th className={th}>
              Category
              <div className="mt-2">
                <select
                  name="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-md border border-purple-300 bg-white px-2 py-1 text-xs font-normal text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
            </th>
            <th className={th}>Image</th>
            <th className={th}>
              Price
              <div className="mt-2 flex gap-1">
                <button
                  className={sortBtn(isActive("price", "asc"))}
                  onClick={() =>
                    setSortConfig({ key: "price", direction: "asc" })
                  }
                >
                  Low to High
                </button>
                <button
                  className={sortBtn(isActive("price", "desc"))}
                  onClick={() =>
                    setSortConfig({ key: "price", direction: "desc" })
                  }
                >
                  High to Low
                </button>
              </div>
            </th>
            <th className={th}>Rating</th>
            <th className={th}>Interest</th>
            <th className={th}>Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-100">
          {displayedProducts.map((product) => {
            const isInterested = interestIds.includes(product.id);
            return (
              <tr
                key={product.id}
                className={`transition-colors ${isInterested ? "bg-green-200 hover:bg-green-300" : "hover:bg-purple-50"}`}
              >
                <td className="px-4 py-3 font-medium text-purple-800">
                  {product.id}
                </td>
                <td className="max-w-xs px-4 py-3">{product.title}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700">
                    {product.category}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-24 rounded-lg bg-white object-contain"
                  />
                </td>
                <td className="px-4 py-3 font-semibold text-emerald-600">
                  {product.price}
                </td>
                <td className="px-4 py-3">
                  <span className="font-medium text-amber-500">&#9733;</span>{" "}
                  {product.rating.rate}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button
                      className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${isInterested ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-purple-100"}`}
                      onClick={() => handleInterests(product.id, true)}
                    >
                      Yes
                    </button>
                    <button
                      className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${!isInterested ? "bg-slate-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-slate-200"}`}
                      onClick={() => handleInterests(product.id, false)}
                    >
                      No
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <button
                    className="rounded-md bg-rose-50 py-1 px-3 text-xs font-medium text-rose-600 transition-colors hover:bg-rose-600 hover:text-white"
                    onClick={() => deleteUser(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
