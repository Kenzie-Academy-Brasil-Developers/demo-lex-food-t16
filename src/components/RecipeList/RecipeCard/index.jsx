import { StyledRecipeCard } from "./style";
import { StyledButton } from "../../../styles/button";

export const RecipeCard = ({ recipe, addRecipeToFavoriteList }) => {
   return (
      <StyledRecipeCard cardStyle={recipe.category}>
         <img src={recipe.image} alt={recipe.title} />
         <div className="contentBox">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <StyledButton buttonStyle="primary" buttonSize="sm" onClick={() => addRecipeToFavoriteList(recipe)}>
               Favoritar
            </StyledButton>
         </div>
      </StyledRecipeCard>
   );
};
