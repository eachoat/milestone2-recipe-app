const React = require('react');
const { useState } = React; 
const DefaultLayout = require('./layouts/Default');



function AddNewRecipeForm() {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    category:'',
    prepTime: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevState => ({
      ...prevState,
      [name] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: recipe.title,
          ingredients: recipe.ingredients.split(',').map(ingredient => ingredient.trim()), 
          instructions: recipe.instructions
        }),
      });
  if (response.ok) {
    const newRecipe = await response.json();
    console.log('Recipe added:', newRecipe);
    //Reset the form or redirect the user
     } else {
      console.error('Recipe not added');
     }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={recipe.title} onChange={handleChange} />
      </label>
      <label>
        Ingredients (coma-separated):
        <input type="text" name="ingredients" value={recipe.ingredients} onChange={handleChange} />
      </label>
      <label>
      Instructions:
      <textarea name="instructions" value={recipe.instructions} onChange={handleChange} />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddNewRecipeForm;