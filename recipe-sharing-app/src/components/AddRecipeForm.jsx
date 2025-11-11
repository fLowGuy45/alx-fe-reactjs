import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addRecipe({ id: Date.now().toString(), title: title.trim(), description: description.trim() });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <h2>Add a New Recipe</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Recipe Title" required />
      <br />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Recipe Description" required />
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
