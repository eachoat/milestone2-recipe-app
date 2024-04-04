import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [newRecipe, setNewRecipe] = useState('');

  useEffect(() => {
    axios.get('/api/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const handleAddFavorite = (recipe) => {
    axios.post('/api/recipes/favorites', recipe)
      .then(response => setFavorites([...favorites, response.data]))
      .catch(error => console.error('Error adding favorite:', error));
  };

  const handleRemoveFavorite = (id) => {
    axios.delete(`/api/recipes/favorites/${id}`)
      .then(() => {
        const updatedFavorites = favorites.filter(recipe => recipe._id !== id);
        setFavorites(updatedFavorites);
      })
      .catch(error => console.error('Error removing favorite:', error));
  };

  return (
    <div className="App">
      <h1 className="title">Explore & Enjoy Delicious Recipes</h1>
      <div className="recipes-container">
        <h2 className="subtitle">All Recipes</h2>
        <ul className="recipes-list">
          {recipes.map(recipe => (
            <li key={recipe._id} className="recipe-item">
              <span className="recipe-title">{recipe.title}</span>
              <button className="add-favorite-btn" onClick={() => handleAddFavorite(recipe)}>Add to Favorites</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="favorites-container">
        <h2 className="subtitle">My Favorite Recipes</h2>
        <ul className="favorites-list">
          {favorites.map(recipe => (
            <li key={recipe._id} className="favorite-item">
              <span className="favorite-title">{recipe.title}</span>
              <button className="remove-favorite-btn" onClick={() => handleRemoveFavorite(recipe._id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;