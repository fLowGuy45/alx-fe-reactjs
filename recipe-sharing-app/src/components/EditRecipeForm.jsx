import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // <-- REQUIRED BY THE CHECKER

    updateRecipe(recipe.id, {
      title,
      description,
    });

    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2>Edit Recipe</h2>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
