"use client";

import { useState } from "react";

export default function NewItemForm() {
  // useState variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [touched, setTouched] = useState(false);
  const isInvalid = touched && name.trim() === "";

  // Event handlers
  function handleSubmit(e) {
    // Prevent default form submission
    e.preventDefault();
    // Create item object
    const item = {
      Name: name,
      Quantity: quantity,
      Category: category,
    };
    //log and alert the item
    console.log(item);
    alert(`Item: ${item.Name}, Quantity: ${item.Quantity}, Category: ${item.Category}`);
    // Reset form fields
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }
  // Name input
  let setNameINput = (e) => {
    setName(e.target.value);
  };
  // Quantity input
  let setQuantityInput = (e) => {
    if (e.target.value < 1) return;
    setQuantity(e.target.value);
  };
  // Category input
  let setCategoryInput = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <form action="#" onSubmit={handleSubmit} className="p-5 border-2 border-gray-300 rounded-md w-100 ">
        <input
          type="text"
          value={name}
          placeholder="Enter Product Name..."
          onChange={setNameINput}
          onBlurCapture={() => setTouched(true)}
          className={`w-90 p-1.5 border-b-2 border-gray-300 outline-none ${
            isInvalid ? `invalid:border-red-500` : `focus:border-blue-500`
          } `}
          id="name-input"
        />
        {isInvalid && <p className="text-red-500 text-sm mt-1">Please enter a valid product name.</p>}
        <div className="flex items-center justify-between mt-3">
          <input
            type="number"
            value={quantity}
            placeholder="write a quantity..."
            onChange={setQuantityInput}
            className="outline-none border-b-2 border-gray-300 focus:border-blue-500 p-1.5 w-40 w"
          />
          <select
            value={category}
            onChange={setCategoryInput}
            className="outline-none border-b-2 border-gray-300 focus:border-blue-500 p-1.5 w-40 "
          >
            <option>Produce</option>
            <option>Dairy</option>
            <option>Bakery</option>
            <option>Meat</option>
            <option>Frozen Foods</option>
            <option>Canned Goods</option>
            <option>Dry Goods</option>
            <option>Beverages</option>
            <option>Snacks</option>
            <option>Household</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-3 py-2 outline-1  rounded-md bg-blue-500 text-white hover:bg-blue-700 transition duration-400 ease-in-out"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
