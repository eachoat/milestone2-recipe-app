import React, { useState } from 'react';
import DefaultLayout from './layout/default';

function AddNewRecipeForm() {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    category: '',
    prepTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: recipe.title,
          ingredients: recipe.ingredients.split(',').map(ingredient => ingredient.trim()),
          instructions: recipe.instructions,
        }),
      });
      if (response.ok) {
        const newRecipe = await response.json();
        console.log('Recipe added:', newRecipe);
        // Reset the form or redirect the user
      } else {
        console.error('Recipe not added');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
    <label htmlFor="title">Title</label>
    <input
        type="text"
        id="title"
        name="title"
        value={recipe.title}
        onChange={handleChange}
        required
    />
</div>

      </form>
    </DefaultLayout>
  );
}

export default AddNewRecipeForm;
