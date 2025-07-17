import { useEffect, useState } from "react";

function RecipeCategory({ selected, onSelect }) {
  const categories = [
    "All",
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Pasta",
    "Pork",
    "Seafood",
    "Vegan",
    "Vegetarian",
    "Breakfast",
    "Goat",
  ];

  return (
    <div className="w-full mx-auto p-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => onSelect(category)}
          className={`cursor-pointer rounded shadow-lg shadow-pink-950 p-3 text-center font-bold ${
            selected === category
              ? "bg-pink-950 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default RecipeCategory;
