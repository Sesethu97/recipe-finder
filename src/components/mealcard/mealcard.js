import { useEffect, useState } from "react";
import RecipeCategory from "../catergory/category";
import { useNavigate } from "react-router-dom";

function MealCard() {
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (mealId) => {
    setFavorites((prev) => {
      const updated = prev.includes(mealId)
        ? prev.filter((id) => id !== mealId)
        : [...prev, mealId];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          selectedCategory === "All"
            ? "https://www.themealdb.com/api/json/v1/1/search.php?s="
            : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const data = await res.json();
        setMealData(data.meals || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error.message}</p>;
  if (!mealData || mealData.length === 0)
    return <p className="p-4">No meals found.</p>;

  return (
    <div>
      <RecipeCategory
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {mealData.map((meal) => {
          const isFavorite = favorites.includes(meal.idMeal);
          return (
            <div
              key={meal.idMeal}
              onClick={() => handleCardClick(meal.idMeal)}
              className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg shadow-pink-950 bg-white relative"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(meal.idMeal);
                }}
                className="absolute top-2 right-2 z-10"
              >
                {isFavorite ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-pink-950"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                    2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                    4.5 2.09C13.09 3.81 14.76 3 16.5 
                    3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                    11.54L12 21.35z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-pink-950"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5C14.377 3.75 
                      12.715 4.876 12 6.483 11.285 4.876 9.623 3.75 
                      7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 
                      12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                )}
              </button>
              <img
                className="w-full h-48 object-cover"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MealCard;
