import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipes = useRecipeStore((state) => state.recipes);

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="p-4">
        <h2>Recipe Not Found</h2>
        <button onClick={() => navigate("/")} className="btn">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2>{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>

      <button onClick={() => navigate("/")} className="btn">Back</button>
    </div>
  );
};

export default RecipeDetails;
