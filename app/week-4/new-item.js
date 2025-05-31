"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    if (quantity == 0) {
      //   disable button
    }
  };

  return (
    <div className="w-80 bg-blue-100 p-2 ">
      <h1 className="font-bold text-2xl  text-center mb-2">NewItem Component</h1>
      <div className="flex gap-5 justify-center ">
        <button
          className={` focus:outline-3 focus:outline-cyan-500  select-none  text-xl px-2   rounded-2xl bg-[#fc9803] transition ease-in-out duration-500 ${
            quantity === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#fc7f03] cursor-pointer"
          }`}
          onClick={decrement}
        >
          ➖
        </button>
        <p className="text-xl font-bold p-2">{quantity}</p>
        <button
          className={`focus:outline-3 focus:outline-cyan-500 select-none text-xl px-2 rounded-2xl bg-[#fc9803] transition ease-in-out duration-500 ${
            quantity === 20 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#fc7f03] cursor-pointer"
          }`}
          onClick={increment}
        >
          ➕
        </button>
      </div>
    </div>
  );
}
