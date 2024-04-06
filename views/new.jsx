const React = require('react');
const Default = require('./layouts/default');

function New({ recipes }) {
    return (
      <Default>
        <div className="container">
          <h2>Add a new recipe</h2>
          <form action="/recipes" method="POST">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="recipe" className="form-label">Recipe</label>
              <select className="form-select" id="recipe" name="recipe">
                {recipes.map((recipe) => (
                  <option value={recipe.id} key={recipe.id}>{recipe.name}</option>
                ))}
              </select>
            </div>
            {/* <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="hasGluten"
                name="hasGluten"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="hasGluten">Has Gluten?</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div className="backButton mt-3">
            <a href="/recipes" className="btn btn-secondary">Go back to the index</a>
          </div>
        </div>
      </Default>
    );
  }
  
  module.exports = New;