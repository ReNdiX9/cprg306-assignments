"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onFormOpen }) {
  const [sortBy, setSortBy] = useState("name");

  const sortFunc = () => {
    if (sortBy === "name") {
      return (a, b) => (a.name || "").localeCompare(b.name || "");
    }
    if (sortBy === "category") {
      return (a, b) => (a.category || "").localeCompare(b.category || "");
    }
  };

  const sortedItems = [...items].sort(sortFunc());

  return (
    <div>
      <div className="flex justify-center items-center gap-6 mb-6">
        <div className="flex flex-row items-center gap-6">
          <p>Sort By:</p>
          <select
            className="border-2 p-2 rounded-lg border-blue-500 focus:outline-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
        <div>
          <button
            onClick={onFormOpen}
            className="px-3 py-2 outline-1 rounded-md bg-blue-500 text-white hover:bg-blue-700 transition duration-400 ease-in-out"
          >
            Add Item
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {sortedItems.map((item) => (
          <div key={item.id} className="flex justify-center items-center">
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </div>
        ))}
      </div>
    </div>
  );
}
