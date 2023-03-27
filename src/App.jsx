import { Header } from "./components/Header"
import { RecipeList } from "./components/RecipeList"
import { StyledButton } from "./styles/button"
import { GlobalStyle } from "./styles/global"
import './styles/reset.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <RecipeList />
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
