import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: "Cheese Ball",
    category: "Appetizer",
    prepTime: "20 minutes",
    ingredients: [
      "1 lb grated extra sharp cheddar",
      "1 lb velveeta",
      "8 oz cream cheese",
      "4 tsp garlic powder",
      "2 tsp worcestershire",
      "1⁄3 tsp cayenne",
      "1 1⁄2 serving spoons Duke’s Mayonaise",
      "Pecans or walnuts"
    ],
    instructions: "Blend cheese and velveeta in mixer and then blend with remaining ingredients. Form into 3 or 4 balls. Roll each ball in pecans or walnuts."
  });

  useEffect(() => {
    fetchRecipes();
    fetchFavorites();
  }, []);

  const fetchRecipes = () => {
    axios.get('/api/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  };

  const fetchFavorites = () => {
    axios.get('/api/recipes/favorites')
      .then(response => setFavorites(response.data))
      .catch(error => console.error('Error fetching favorites:', error));
  };

  const handleAddRecipe = () => {
    axios.post('/api/recipes', newRecipe)
      .then(response => {
        setRecipes([...recipes, response.data]);
        setNewRecipe({
          title: "",
          category: "",
          prepTime: "",
          ingredients: [],
          instructions: ""
        });
      })
      .catch(error => console.error('Error adding recipe:', error));
  };

  const handleUpdateRecipe = (id, updatedRecipe) => {
    axios.put(`/api/recipes/${id}`, updatedRecipe)
      .then(() => {
        fetchRecipes();
      })
      .catch(error => console.error('Error updating recipe:', error));
  };

  const handleDeleteRecipe = (id) => {
    axios.delete(`/api/recipes/${id}`)
      .then(() => {
        const updatedRecipes = recipes.filter(recipe => recipe._id !== id);
        setRecipes(updatedRecipes);
      })
      .catch(error => console.error('Error deleting recipe:', error));
  };

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
              <button className="update-recipe-btn" onClick={() => handleUpdateRecipe(recipe._id, { title: "Updated Title" })}>Update</button>
              <button className="delete-recipe-btn" onClick={() => handleDeleteRecipe(recipe._id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="add-recipe-form">
          <h3>Add New Recipe</h3>
          <input type="text" placeholder="Title" value={newRecipe.title} onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })} />
          <input type="text" placeholder="Category" value={newRecipe.category} onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })} />
          <input type="text" placeholder="Prep Time" value={newRecipe.prepTime} onChange={(e) => setNewRecipe({ ...newRecipe, prepTime: e.target.value })} />
          <textarea placeholder="Ingredients (one per line)" value={newRecipe.ingredients.join('\n')} onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value.split('\n') })}></textarea>
          <textarea placeholder="Instructions" value={newRecipe.instructions} onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}></textarea>
          <button className="add-recipe-btn" onClick={handleAddRecipe}>Add Recipe</button>
        </div>
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
      <button className="add-favorite-btn" onClick={handleAddFavorite}>Add "Cheese Ball" to Favorites</button>
    </div>
  );
};

export default App;