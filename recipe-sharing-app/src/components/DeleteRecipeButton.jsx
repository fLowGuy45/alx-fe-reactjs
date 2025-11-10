import { useRecipeStore } from '../store/recipeStore'


const DeleteRecipeButton = ({ id, afterDelete }) => {
const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)


const handleDelete = () => {
if (!confirm('Delete this recipe?')) return
deleteRecipe(id)
if (typeof afterDelete === 'function') afterDelete()
}


return (
<button onClick={handleDelete} style={{ color: 'red' }}>
Delete
</button>
)
}


export default DeleteRecipeButton
