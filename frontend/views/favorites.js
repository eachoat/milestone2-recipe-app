"use strict";
const React = require('react');
const Default = require('./layouts/default');
function FavoritesPage({ favoriteRecipes }) {
    const filterRecipesByCategory = (category) => {
        return favoriteRecipes.filter(recipe => recipe.category === category);
    };
    return (<Default>
      <div className="container">
        <h2>Favorites Page</h2>
        <div className="row">
          {categories.map((category, index) => (<div className="col-md-6" key={index}>
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="card-title">{category}</h3>
                  <ul className="list-group list-group-flush">
                    {filterRecipesByCategory(category).map((recipe, index) => (<li className="list-group-item" key={index}>{recipe.name}</li>))}
                  </ul>
                </div>
              </div>
            </div>))}
        </div>
      </div>
      
    </Default>);
}
module.exports = FavoritesPage;
