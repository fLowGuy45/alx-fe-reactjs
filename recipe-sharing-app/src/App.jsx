import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import { useRecipeStore } from "./store/recipeStore";

function App() {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Generate recommendations on app load
  generateRecommendations();

  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <h1>Recipe Sharing App</h1>
          <nav>
            <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
            <Link to="/add">Add Recipe</Link>
          </nav>
        </header>

        {/* Global components */}
        <SearchBar />
        <FavoritesList />
        <RecommendationsList />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
