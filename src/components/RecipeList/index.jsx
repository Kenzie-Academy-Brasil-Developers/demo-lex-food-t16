import { RecipeCard } from "./RecipeCard";
import { StyledRecipeList } from "./style";

export const RecipeList = ({ recipeList }) => {
   return (
      <>
         <h1>Lista de Receitas</h1>

         <StyledRecipeList>
            {recipeList.map((recipe) => (
               <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
         </StyledRecipeList>
      </>
   );
};
