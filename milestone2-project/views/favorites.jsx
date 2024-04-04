
const React = require('react');
const Default = require('./layouts/default');
const Footer = require('./footer');

function FavoritesPage({ favoriteRecipes }) {
    const categories = ['Appetizers', 'Main Dishes', 'Desserts', 'Sides'];

    const filterRecipesByCategory = (category) => {
        return favoriteRecipes.filter(recipe => recipe.category === category);
      };
    
      return (
        <Default>
          <h2>Favorites Page</h2>
                                     {/* Display a list of categories */}
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <h3>{category}</h3>
                <ul>
                    
                                     {/* Display recipes for the current category */}
                  {filterRecipesByCategory(category).map((recipe, index) => (
                    <li key={index}>{recipe.name}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <Footer />
        </Default>
      );
    }
    
module.exports = FavoritesPage;
