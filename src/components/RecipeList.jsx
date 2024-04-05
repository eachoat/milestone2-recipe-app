import React, { useState, useEffect } from 'react';
import RecipeItem from './RecipeItem';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); // Start loading before fetching
    const url = '/api/recipes'; 
    console.log(`Fetching from: ${url}`); 
    fetch(url)
      .then(response => {
        if (!response.ok) {
          // This throws an error and jumps directly to the catch block
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json(); // Parse JSON only if the response was ok
      })
      .then(data => {
        setRecipes(data);
        setLoading(false); // Stop loading after setting the data
        setError(null); // Reset error state upon successful fetch
      })
      .catch(error => {
        console.error("Fetching error:", error);
        
        setError(`Fetching error: ${error.message}`);
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
