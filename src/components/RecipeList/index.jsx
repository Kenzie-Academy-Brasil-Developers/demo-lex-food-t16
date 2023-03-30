import { RecipeCard } from "./RecipeCard";
import { StyledRecipeList } from "./style";

export const RecipeList = ({ recipeList, addRecipeToFavoriteList, filter, filterRecipeList }) => {
   const currentRecipeList = filter !== "" ? filterRecipeList : recipeList
   
   return (
      <>
         <h1>Lista de Receitas</h1>

         <StyledRecipeList>
            {currentRecipeList.map((recipe) => (
               <RecipeCard key={recipe.id} recipe={recipe} addRecipeToFavoriteList={addRecipeToFavoriteList} />
            ))}
         </StyledRecipeList>
      </>
   );
};
