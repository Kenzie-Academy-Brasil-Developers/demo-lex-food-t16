import { useEffect, useState } from "react";
import { Example } from "./components/Example";
import { Header } from "./components/Header"
import { RecipeList } from "./components/RecipeList"
import { StyledButton } from "./styles/button"
import { GlobalStyle } from "./styles/global"
import './styles/reset.css';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  const loadRecipe = async () => {
    try {  
      const response = await fetch('https://recipe-fake-api.onrender.com/recipes');
      const json = await response.json();
      setRecipeList(json);
    } catch (error) {
      console.log(error);
    }
  }
  
  // loadRecipe() -> CUIDADO - execuções de função diretamente não função componente geram loop infinito;

  useEffect(() => {
    console.log('Montagem acontecendo.')
    loadRecipe();
  }, []) //Executar a primeira vez, executar uma requisição de GET na montagem

  return (
    <div className="App">
      <GlobalStyle />

      <button onClick={() => setOpen(!isOpen)}>Modal</button>
      {isOpen ? <Example /> : null}
      <Header />
      <RecipeList recipeList={recipeList} />
      <StyledButton buttonSize="lg" buttonStyle="primary">
        Teste
      </StyledButton>
      <StyledButton buttonSize="md" buttonStyle="secondary">
        Teste
      </StyledButton>
      <StyledButton buttonSize="sm" buttonStyle="secondary">
        Teste
      </StyledButton>
    </div>
  )
}

export default App
