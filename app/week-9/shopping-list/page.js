"use client";

import { useState } from "react";
import ItemList from "./item-list";
import ItemsData from "./items.json";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

// Utility function to remove emojis
function removeEmojis(str) {
  return str.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\u24C2|[\uD83C-\uDBFF\uDC00-\uDFFF]|\u200D|\u2640|\u2642|\u2600-\u2B55|\u23cf|\u23e9|\u231a|\u3030|\ufe0f|\u2069|\u2066|\u200c|\u2028|\u2060|\u2063|\u2049|\u203c|\u25aa|\u25ab|\u25b6|\u25c0|\u25fb|\u25fc|\u25fd|\u25fe|\u2614|\u2615|\u2744|\u2747|\u2753|\u2754|\u2755|\u2795|\u2796|\u2797|\u27a1|\u2934|\u2935|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u3030|\u303d|\u3297|\u3299|\ud83c[\udde6-\uddff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff])/g,
    ""
  );
}

export default function Page() {
  const [items, setItems] = useState(ItemsData);
  const [showForm, setShowForm] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const handleAddItem = (newItem) => {
    const maxId = items.length > 0 ? Math.max(...items.map((item) => Number(item.id) || 0)) : 0;
    const itemWithId = { ...newItem, id: maxId + 1 };
    setItems([...items, itemWithId]);
    setShowForm(false);
  };

  const handleItemSelect = (item) => {
    if (!item || !item.name) {
      setSelectedItemName("");
      return;
    }
    let cleanedItem = item.name.split(",")[0].trim();
    cleanedItem = removeEmojis(cleanedItem).trim();
    setSelectedItemName(cleanedItem);
  };

  if (!user) {
    return (
      <main className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <p className="mb-8 text-lg">Please sign in to access your shopping list.</p>
        <Link href="/week-9/" className="ml-4 underline italic">
          Go to sign in page
        </Link>
      </main>
    );
  }

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mx-auto w-fit mb-4 text-center">Shopping List</h1>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 w-full max-w-xl">
          {showForm && (
            <>
              <div className="fixed inset-0 bg-gray-400 opacity-65 blur-md z-10" onClick={() => setShowForm(false)} />
              <NewItem onAddItem={handleAddItem} onCancel={() => setShowForm(false)} />
            </>
          )}
          <ItemList items={items} onFormOpen={() => setShowForm(true)} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 w-full max-w-xl justify-center items-center flex">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
