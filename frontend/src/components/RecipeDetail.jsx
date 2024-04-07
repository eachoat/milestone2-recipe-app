import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`/api/recipes/${recipeId}`)
      .then(response => response.json())
      .then(setRecipe)
      .catch(console.error);
  }, [recipeId]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <DefaultLayout>
    <div>
      <h2>{recipe.title}</h2>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
    </DefaultLayout>
  );
}

export default RecipeDetail;
