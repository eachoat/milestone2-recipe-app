import React, { useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';

function AddRecipeForm() {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Replace with your API call
    fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    })
      .then(() => alert('Recipe added!'))
      .catch(console.error);
  };

  return (
    <DefaultLayout>
         <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input name="title" value={recipe.title} onChange={handleChange} />
      </label>
      <label>
        Ingredients (comma-separated):
        <input name="ingredients" value={recipe.ingredients} onChange={handleChange} />
      </label>
      <label>
        Instructions:
        <textarea name="instructions" value={recipe.instructions} onChange={handleChange} />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
    </DefaultLayout>
   
  );
}

export default AddRecipeForm;
