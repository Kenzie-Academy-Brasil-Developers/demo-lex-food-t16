import styled, { css } from "styled-components";

//Componentes de estilo também podem props
export const StyledRecipeCard = styled.li`
    background: var(--color-example);
    box-shadow: var(--box-shadow-1);
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

    img{
       object-fit: cover; 
       object-position: center center;
       width: 100%;
       height: 200px; 
    }    

    .contentBox{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
    }
`