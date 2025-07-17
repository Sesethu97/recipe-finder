import { useEffect, useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const favIds = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favIds);

    const fetchFavorites = async () => {
      const fetched = [];
      for (const id of favIds) {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        if (data.meals) {
          fetched.push(data.meals[0]);
        }
      }
      setMeals(fetched);
    };

    if (favIds.length > 0) {
      fetchFavorites();
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
      {meals.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl">{meal.strMeal}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
