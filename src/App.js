import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Home from "./pages/home/home";
import RecipeCard from "./components/mealcard/mealcard";
import MealDetails from "./pages/recipes/recipes";
import Favorites from "./pages/favorites/favorites";

function App() {
  return (
    <Router>
      <div className="max-h-screen ">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="recipe" element={<RecipeCard />} />
          <Route path="/recipe/:id" element={<MealDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
