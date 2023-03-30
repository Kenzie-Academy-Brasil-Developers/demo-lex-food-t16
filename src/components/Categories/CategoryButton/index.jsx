import { StyledButton } from "../../../styles/button";

export const CategoryButton = ({filter, setFilter, slug, label}) => {
   return (
      <li>
         <StyledButton
            buttonStyle={filter === slug ? "primary" : "outline-primary"}
            buttonSize="sm"
            onClick={() => setFilter(slug)}
         >
            {label}
         </StyledButton>
      </li>
   );
};
