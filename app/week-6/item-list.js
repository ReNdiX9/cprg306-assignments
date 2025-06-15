"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortFunc = () => {
    if (sortBy === "name") {
      return (a, b) => a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return (a, b) => a.category.localeCompare(b.category);
    }
  };

  const sortedItems = [...items].sort(sortFunc());

  return (
    <div>
      <div className="flex flex-row items-center  gap-6 mb-4">
        <p>Sort By:</p>
        <select
          className="border-2 p-2 rounded-lg  border-blue-500 focus:outline-none  "
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    </div>
  );
}
