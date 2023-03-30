import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Categories } from "./components/Categories";
import { FavoriteList } from "./components/FavoriteList";
import { Header } from "./components/Header";
import { RecipeList } from "./components/RecipeList";
import { api } from "./services/api";
import { DarkMode, GlobalStyle, LightMode } from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/reset.css";
import { StyledToastContainer } from "./styles/toast";

function App() {
   //inicialização
   const favoriteLocalStorage = localStorage.getItem("@FAVORITELIST");
   //Carregando do localStorage
   const darkModeLocalStorage = localStorage.getItem("@DARKMODE");
   const [isOpen, setIsOpen] = useState(false);
   const [recipeList, setRecipeList] = useState([]);
   const [favoriteList, setFavoriteList] = useState(
      favoriteLocalStorage ? JSON.parse(favoriteLocalStorage) : []
   );
   const [darkMode, setDarkMode] = useState(
      darkModeLocalStorage ? darkModeLocalStorage : "FALSE"
   );
   const [filter, setFilter] = useState("");

   //Exemplo de reatividade de estado na lógica
   const categories = [
      {
         label: 'Sushi',
         slug: 'sushi',
      },
      {
         label: 'Hotdog',
         slug: 'hotdog'
      },
      {
         label: 'Pizza',
         slug: 'pizza'
      }
   ]
   //Métodos recomendados para algoritmos de busca mais acertivos
   //includes (string) || toLowerCase || trim || normalize 
   // hamb
   // HAMBURGUER
   // hamburguer
   const filterRecipeList = recipeList.filter((recipe) => recipe.category === filter);
   //console.log(filterRecipeList);

   useEffect(() => {
      //Salvando no localStorage
      localStorage.setItem("@DARKMODE", darkMode);
   }, [darkMode]); //Observar o darkMode

   // Efeito de atualização
   useEffect(() => {
      localStorage.setItem("@FAVORITELIST", JSON.stringify(favoriteList));
   }, [favoriteList]); //Tem a lista de dependencias com uma ou mais variáveis

   const changeColorMode = () => {
      setDarkMode(darkMode === "FALSE" ? "TRUE" : "FALSE");
   };

   const addRecipeToFavoriteList = (recipe) => {
      // some verifica se a receita já está contida na lista de favoritos
      if (!favoriteList.some((favorite) => favorite.id === recipe.id)) {
         const newFavoriteList = [...favoriteList, recipe];
         setFavoriteList(newFavoriteList);
         toast.success("Receita favorita com sucesso!", {
            autoClose: 2000,
         })
      } else {
         toast.error("Este item já está favoritado.", {
            autoClose: 2000,
         });
      }
   };

   const removeRecipeFromFavoriteList = (favoriteId) => {
      const newFavoriteList = favoriteList.filter(
         (favorite) => favorite.id !== favoriteId
      );
      setFavoriteList(newFavoriteList);
      toast.success("Receita desfavoritada com sucesso!", {
         autoClose: 2000,
      })
   };

   const loadRecipe = async () => {
      try {
         const response = await api.get("recipes");
         //console.log(response);
         setRecipeList(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      console.log("Montagem acontecendo.");
      loadRecipe();
   }, []);

   return (
      <div className="App">
         <GlobalStyle />
         {/* um ToastContainer somente é necessário */}
         <StyledToastContainer position="bottom-left" theme="light" />
         {darkMode === "FALSE" ? <LightMode /> : <DarkMode />}
         <button onClick={changeColorMode}>Alterar modo de cor</button>
         <button onClick={() => setIsOpen(!isOpen)}>
            Favoritos ({favoriteList.length})
         </button>
         <Header />
         <Categories categories={categories} filter={filter} setFilter={setFilter} />
         <RecipeList
            addRecipeToFavoriteList={addRecipeToFavoriteList}
            recipeList={recipeList}
            filter={filter}
            filterRecipeList={filterRecipeList}
         />
         {isOpen ? (
            <FavoriteList
               favoriteList={favoriteList}
               removeRecipeFromFavoriteList={removeRecipeFromFavoriteList}
               setIsOpen={setIsOpen}
            />
         ) : null}
      </div>
   );
}

export default App;
