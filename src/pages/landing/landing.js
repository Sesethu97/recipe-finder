import { Link } from "react-router-dom";
import RecipeBook from "../../images/recipes.png";

function Landing() {
  return (
    <div className=" grid grid-cols-2 gap-2 h-screen place-items-center">
      <div>
        <img
          className="w-100 h-100 object-cover "
          src={RecipeBook}
          alt="home-recipe-book "
        />
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-pink-950 text-[80px] text-shadow text-shadow-blur-2 font-bold">
            Recipe Book
          </h2>
          <Link to="/home">
            <button className="bg-pink-950 text-white rounded-md mt-6 py-2 px-6 shadow-pink-500/50">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
