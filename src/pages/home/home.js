import RecipeCategory from "../../components/catergory/category";
import MealCard from "../../components/mealcard/mealcard";
import TopNav from "../../components/topnav/topnav";

function Home() {
  return (
    <div className="h-screen ">
      <TopNav />
      <h2 className="text-pink-950 text-2xl font-bold flex justify-start items-start mb-4 mt-4">
        Easy To Cook Recipes
      </h2>

      <MealCard />
    </div>
  );
}

export default Home;
