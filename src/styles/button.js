import styled, { css } from "styled-components";

// Dentro do template string - todo o CSS convencional funciona
// styled component ele é o JSX dos estilo
export const StyledButton = styled.button`
   display: inline-flex;
   align-items: center;
   justify-content: center;

   transition: 0.4s;

   ${({ buttonSize }) => {
      /*
        if(buttonSize === "lg"){
            return css`
                padding: 0 30px;
                height: 52px;
            `
        } else if (buttonSize === "md") {
            return css`
                padding: 0 25px;
                height: 46px;
            `
        } else if (buttonSize === "sm") {
            return css`
                padding: 0 20px;
                height: 40px;
            `
        }
      */
      switch (buttonSize) {
         case "lg":
            return css`
               padding: 0 30px;
               height: 52px;
            `;
         case "md":
            return css`
               padding: 0 25px;
               height: 46px;
            `;
         case "sm":
            return css`
               padding: 0 20px;
               height: 40px;
            `;
      }
   }}

   ${({ buttonStyle }) => {
      switch (buttonStyle) {
         case "primary":
            return css`
               background: var(--color-primary);
               color: white;
            `;
         case "secondary":
            return css`
               background: red;
               color: white;
            `;
      }
   }}
`;
