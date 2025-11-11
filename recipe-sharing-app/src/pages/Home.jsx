import RecipeList from '../components/RecipeList';
import AddRecipeForm from '../components/AddRecipeForm';

const Home = () => (
  <div>
    <AddRecipeForm />
    <hr style={{ margin: '2rem 0' }} />
    <RecipeList />
  </div>
);

export default Home;
