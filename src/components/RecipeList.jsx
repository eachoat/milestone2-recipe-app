import React, { useState, useEffect } from 'react';
   import RecipeItem from './RecipeItem';

   function RecipeList() {
     const [recipes, setRecipes] = useState([]);

     useEffect(() => {
       fetch('/api/recipes')
         .then(response => response.json())
         .then(data => setRecipes(data));
     }, []);

     return (
       <div>
         {recipes.map(recipe => (
           <RecipeItem key={recipe._id} recipe={recipe} />
         ))}
       </div>
     );
   }

   export default RecipeList;