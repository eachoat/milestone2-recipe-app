import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from './actions/recipeActions';
import RecipeList from './components/RecipeList';
import NewRecipe from './components/NewRecipe';

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

// Assuming fetchRecipes action creator uses async-await or Promises internally
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      await dispatch(fetchRecipes()); // Ensure this hits the correct backend endpoint
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
      setError('Failed to load recipes.');
      setLoading(false);
    }
  };

  fetchData();
}, [dispatch]);


  return (
    <div className="App">
      <header>
        <h1>Recipes</h1>
      </header>
      <main>
        {/* UI for adding new recipes */}
        <NewRecipe />
        {error && <p className="error">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </main>
    </div>
  );
}

export default App;
