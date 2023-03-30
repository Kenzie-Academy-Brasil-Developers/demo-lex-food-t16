import { StyledButton } from "../../styles/button";
import { CategoryButton } from "./CategoryButton";
import { StyledCategoryList } from "./style";

export const Categories = ({ categories, filter, setFilter }) => {
   return (
      <>
         <StyledCategoryList>
            <CategoryButton filter={filter} setFilter={setFilter} label="Todos" slug=""/>
            {categories.map((category) => (
               <CategoryButton key={category.slug} filter={filter} setFilter={setFilter} label={category.label} slug={category.slug}/>               
            ))}
         </StyledCategoryList>
         {filter ? <p>Categoria: {filter}</p> : null}
      </>
   );
};
