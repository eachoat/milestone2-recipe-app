import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from './actions/recipeActions'; 
import RecipeComponent from './components/RecipeComponent'; 

import './App.css';

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);
      await dispatch(fetchRecipes()); 
      setLoading(false);
    };
    loadRecipes();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Recipes</h1>
      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <div>
          {recipes.map(recipe => (
            <RecipeComponent key={recipe.id} recipe={recipe} /> // Display each recipe
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
