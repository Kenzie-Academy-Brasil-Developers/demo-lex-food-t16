import { useState, useEffect } from "react";

export const Example = () => {
   const [count, setCount] = useState(0);

   // useEffect - monitora o Ciclo do Componente que foi escrito e pode disparar uma função em três momentos diferentes:
   
   // onMount - efeito de montagem
   useEffect(() => {
      console.log("A montagem aconteceu.");
   }, []);

   // onUpdate - efeito de atualização
   useEffect(() => {
      /* acompanhar a montagem na primeira vez */
      console.log("A atualização aconteceu.");
   }, [count]);

   // onDismount - efeito de desmontagem
   useEffect(() => {
      return () => {
         console.log("A desmontagem aconteceu.");
      };
   }, []);

   return (
      <div>
         Componente de exemplo
         <h1>{count}</h1>
         <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>
   );
};
