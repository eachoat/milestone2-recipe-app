import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { fetchRecipes } from '../recipesAPI';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchRecipes() 
      .then(data => {
        setRecipes(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
        setError('Failed to load recipes.');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <DefaultLayout>
          <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    </DefaultLayout>

  );
}

export default RecipeList;
