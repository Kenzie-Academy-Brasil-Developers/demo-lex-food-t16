export const RecipeCard = ({recipe}) => {
  return (
    <li>
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
    </li>
  )
}
