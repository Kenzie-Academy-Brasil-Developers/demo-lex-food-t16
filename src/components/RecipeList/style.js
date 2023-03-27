import styled from "styled-components";

export const StyledRecipeList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 20px;

    @media (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }
`