"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  if (!ingredient) return [];
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  if (!response.ok) throw new Error("Could not fetch meals");
  let data = await response.json();
  return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchMealIdeas(ingredient).then(setMeals);
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-center mb-8 text-2xl">Meal Ideas {ingredient ? `for "${ingredient}"` : undefined}</h2>
      {!meals.length && ingredient && <p className="italic">No meal ideas found for this ingredient.</p>}
      <ul
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          w-full
          max-w-4xl
          mx-auto
        "
      >
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="
              flex flex-col items-center
              bg-white
              shadow-md
              rounded-2xl
              border-2
              hover:bg-blue-50
              transition
            "
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={150}
              height={150}
              className="rounded-xl mb-2 object-cover aspect-square"
            />
            <div className="p-1">
              <p className=" text-center ">{meal.strMeal}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
