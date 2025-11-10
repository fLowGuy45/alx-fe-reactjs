import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'


const EditRecipeForm = () => {
const { id } = useParams()
const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === id))
const updateRecipe = useRecipeStore((state) => state.updateRecipe)
const navigate = useNavigate()


const [title, setTitle] = useState('')
const [description, setDescription] = useState('')


useEffect(() => {
if (recipe) {
setTitle(recipe.title)
setDescription(recipe.description)
}
}, [recipe])


if (!recipe) {
return (
<div>
<p>Recipe not found.</p>
</div>
)
}


const handleSubmit = (e) => {
e.preventDefault()
if (!title.trim() || !description.trim()) return
updateRecipe({ id, title: title.trim(), description: description.trim() })
navigate(`/recipes/${id}`)
}


return (
<form onSubmit={handleSubmit}>
<h2>Edit Recipe</h2>
<input value={title} onChange={(e) => setTitle(e.target.value)} required />
<br />
<textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
<br />
<button type="submit">Save Changes</button>
</form>
)
}


export default EditRecipeForm
