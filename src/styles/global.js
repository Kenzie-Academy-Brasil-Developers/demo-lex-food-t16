import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol{
        list-style: none;
    }

    :root{
        --color-example: #FFFFFF; 
        --box-shadow-1: 0 0 25px 0 rgba(0,0,0,.15);
    }

    img{
        max-width: 100%;
    }
`

//template string
//`texto normal ${javascript}`