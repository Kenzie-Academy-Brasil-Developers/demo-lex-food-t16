import styled, { css } from "styled-components";

//Componentes de estilo também podem props
export const StyledRecipeCard = styled.li`
    background: var(--color-example);
    padding: 20px;
    ${({cardStyle}) => {
        if(cardStyle === "favorite"){
            return css`
                border-left: 2px solid green;
            `
        } else if (cardStyle === "recent"){
            return css`
                border-left: 2px blue;
            `
        }
    }}
`