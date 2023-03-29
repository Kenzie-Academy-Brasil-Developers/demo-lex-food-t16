import { useEffect, useState } from "react";
import { FavoriteList } from "./components/FavoriteList";
import { Header } from "./components/Header";
import { RecipeList } from "./components/RecipeList";
import { api } from "./services/api";
import { DarkMode, GlobalStyle, LightMode } from "./styles/global";
import "./styles/reset.css";

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
      } else {
         console.log("Este item já está favoritado.");
      }
   };

   const removeRecipeFromFavoriteList = (favoriteId) => {
      const newFavoriteList = favoriteList.filter(
         (favorite) => favorite.id !== favoriteId
      );
      setFavoriteList(newFavoriteList);
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
         {darkMode === "FALSE" ? <LightMode /> : <DarkMode />}
         <button onClick={changeColorMode}>Alterar modo de cor</button>
         <button onClick={() => setIsOpen(!isOpen)}>
            Favoritos ({favoriteList.length})
         </button>
         <Header />
         <RecipeList
            addRecipeToFavoriteList={addRecipeToFavoriteList}
            recipeList={recipeList}
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
