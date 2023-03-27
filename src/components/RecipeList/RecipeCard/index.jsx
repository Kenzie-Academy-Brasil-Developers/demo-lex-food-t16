import { StyledRecipeCard } from "./style"
import { StyledButton } from "../../../styles/button"

export const RecipeCard = ({recipe}) => {
  return (
    <StyledRecipeCard cardStyle={recipe.category}>
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <StyledButton buttonStyle="primary" buttonSize="sm">Favoritar</StyledButton>
    </StyledRecipeCard>
  )
}
