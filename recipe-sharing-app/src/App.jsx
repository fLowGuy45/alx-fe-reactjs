import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🍲🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr style={{ margin: '2rem 0' }} />
      <RecipeList />
    </div>
  );
}

export default App;
