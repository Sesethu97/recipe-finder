import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setMeal(data.meals[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error.message}</p>;
  if (!meal) return <p className="p-4">No meal found.</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto bg-pink-50">
      <h1 className="text-3xl font-bold mb-4 text-pink-950">{meal.strMeal}</h1>
      <img
        className="w-full rounded mb-4 w-48 h-48"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <h2 className="text-xl font-semibold mb-2 text-pink-950">Instructions</h2>
      <p className="text-black whitespace-pre-wrap">{meal.strInstructions}</p>

      <h3 className="mt-4 font-semibold text-pink-950">
        Category: {meal.strCategory}
      </h3>
      <h3 className="font-semibold text-pink-950">Area: {meal.strArea}</h3>

      <a
        className="text-pink-700 underline mt-4 block"
        href={meal.strYoutube}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch on YouTube
      </a>
    </div>
  );
}

export default MealDetails;
