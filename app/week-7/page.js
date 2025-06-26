"use client";

import { useState } from "react";
import ItemList from "./item-list";
import ItemsData from "./items.json";
import NewItem from "./new-item";

export default function Page() {
  const [items, setItems] = useState(ItemsData);
  const [showForm, setShowForm] = useState(false);

  const handleAddItem = (newItem) => {
    const maxId = items.length > 0 ? Math.max(...items.map((item) => Number(item.id) || 0)) : 0;
    const itemWithId = { ...newItem, id: maxId + 1 };
    setItems([...items, itemWithId]);
    setShowForm(false);
  };

  return (
    <main className="p-4 grid-cols-3">
      <h1 className="text-3xl font-bold mx-auto w-fit mb-4">Shopping List</h1>
      <ItemList items={items} onFormOpen={() => setShowForm(true)} />
      {showForm && (
        <>
          <div className="fixed inset-0 bg-gray-400 opacity-65 blur-md z-10" onClick={() => setShowForm(false)} />
          <NewItem onAddItem={handleAddItem} onCancel={() => setShowForm(false)} />
        </>
      )}
    </main>
  );
}
