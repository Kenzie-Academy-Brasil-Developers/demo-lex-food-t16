import { RecipeCard } from "./RecipeCard"

export const RecipeList = () => {
    return(
        <ul>
            <h1>Lista de Receitas</h1>
            <RecipeCard recipe={{ name: "Hamburguer", description: "Coloca uma carne no meio do pão."}} />
            <RecipeCard recipe={{ name: "Miojo", description: "Cozido em três minutos."}} />
        </ul>
    )
}