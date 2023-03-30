import { useEffect, useRef } from "react";
import { useOutClick } from "../../hooks/useOutClick";
import { StyledButton } from "../../styles/button";
import { StyledFavoriteModal } from "./style";

export const FavoriteList = ({
   favoriteList,
   removeRecipeFromFavoriteList,
   setIsOpen,
}) => {
   
   const modalRef = useRef(); // "querySelector para react" - seletor imperativo para React

   useEffect(() => {
      //montagem
      const handleClick = (event) => {
         //console.log(modalRef.current);
         console.log(event.target);
         if(!modalRef.current.contains(event.target)){
            setIsOpen(false);
         }     
      }

      window.addEventListener('mousedown', handleClick);

      //desmontagem
      return () => {
         window.removeEventListener('mousedown', handleClick);
      }
   }, [])
   

   /*
  const modalRef = useOutClick(() => {
   setIsOpen(false);
  })
  */

   return (
      <StyledFavoriteModal role="dialog" ref={modalRef}>
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
