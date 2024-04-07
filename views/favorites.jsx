const React = require('react');
const Default = require('./layouts/default');

function FavoritesPage({ favoriteRecipes, categories }) {
  const filterRecipesByCategory = (category) => {
      return favoriteRecipes.filter(recipe => recipe.category === category);
    };

  // Assume that `categories` is now received from props
  return (
    <Default>
      <div className="container">
        <h2>Favorites Page</h2>
        <div className="row">
          {categories && categories.map((category) => (
            <div className="col-md-6" key={category}>
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="card-title">{category}</h3>
                  <ul className="list-group list-group-flush">
                    {filterRecipesByCategory(category).map((recipe) => (
                      <li className="list-group-item" key={recipe.id}>{recipe.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </Default>
  );
}

module.exports = FavoritesPage;
