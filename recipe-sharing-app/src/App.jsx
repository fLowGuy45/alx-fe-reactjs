import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>🍲 Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
	<Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
	<Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
