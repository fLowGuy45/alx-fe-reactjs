import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from '../components/DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '1rem' }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: '1rem' }}>
          Edit
        </Link>
        <DeleteRecipeButton id={id} afterDelete={() => navigate('/')} />
      </div>
    </div>
  );
};

export default RecipeDetails;
