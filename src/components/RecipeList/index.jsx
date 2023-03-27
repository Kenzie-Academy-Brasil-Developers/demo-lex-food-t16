import { RecipeCard } from "./RecipeCard";
import { StyledRecipeList } from "./style";

export const RecipeList = () => {
   return (
      <>
         <h1>Lista de Receitas</h1>
         <StyledRecipeList>
            <RecipeCard
               recipe={{
                  name: "Hamburguer",
                  description: "Coloca uma carne no meio do pão.",
                  category: "favorite",
               }}
            />
            <RecipeCard
               recipe={{
                  name: "Miojo",
                  description: "Cozido em três minutos.",
                  category: "recent",
               }}
            />
         </StyledRecipeList>
      </>
   );
};
