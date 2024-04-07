import React, { useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';

function AddRecipeForm() {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const postRecipe = async () => {
    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert('Recipe added!');
    } catch (error) {
      setErrorMessage('Failed to add recipe. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');
    postRecipe();
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
        <button type="submit" disabled={submitting}>Add Recipe</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </DefaultLayout>
  );
}

export default AddRecipeForm;
