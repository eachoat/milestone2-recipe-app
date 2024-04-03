import React, { useState, useEffect } from 'react';
import RecipeItem from './RecipeItem';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    setLoading(true); // Start loading before fetching
    fetch('/api/recipes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Ensure to return the promise from response.json()
      })
      .then(data => {
        setRecipes(data);
        setLoading(false); // Stop loading after setting the data
        setError(null); // Reset error state upon successful fetch
      })
      .catch(error => {
        console.error("Fetching error: ", error);
        setError(error.message);
        setLoading(false); // Stop loading on error
      });
  }, []);

  // Handling loading and error states in the UI
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <RecipeItem key={recipe._id} recipe={recipe} />
        ))
      ) : (
        <div>No recipes found.</div> // Handle case where there are no recipes
      )}
    </div>
  );
}

export default RecipeList;
