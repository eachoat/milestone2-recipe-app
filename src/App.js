import React, { useState } from 'react';
import './App.css';

function App() {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', instructions: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Recipe:', recipe);
    // Here you would typically send the recipe to the backend
    setRecipe({ title: '', ingredients: '', instructions: '' }); // Reset form
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe App</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={recipe.title}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Ingredients (comma-separated):
              <input
                type="text"
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Instructions:
              <textarea
                name="instructions"
                value={recipe.instructions}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Add Recipe</button>
        </form>
        {/* Placeholder for displaying recipes */}
        <section>
          <h2>Recipes List</h2>
          <p>Display recipes here...</p>
          {/* Future implementation: Map through recipes state to display them */}
        </section>
      </main>
    </div>
  );
}

export default App;
