import { StyledButton } from "../../styles/button";
import { StyledFavoriteModal } from "./style";

export const FavoriteList = ({
   favoriteList,
   removeRecipeFromFavoriteList,
   setIsOpen,
}) => {
   return (
      <StyledFavoriteModal role="dialog">
         <button onClick={() => setIsOpen(false)}>Fechar</button>
         <ul>
            {favoriteList.map((favorite) => (
               <li key={favorite.id}>
                  <h3>{favorite.title}</h3>
                  <StyledButton
                     buttonStyle="primary"
                     buttonSize="md"
                     onClick={() => removeRecipeFromFavoriteList(favorite.id)}
                  >
                     Desfavoritar
                  </StyledButton>
               </li>
            ))}
         </ul>
      </StyledFavoriteModal>
   );
};
