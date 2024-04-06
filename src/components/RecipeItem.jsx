import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = ({ recipe }) => {
  return (
    <section className="recipe-item" aria-labelledby="recipe-title">
      <h2 id="recipe-title">{recipe.title}</h2>
      <section aria-labelledby="ingredients-heading">
        <h3 id="ingredients-heading">Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="instructions-heading">
        <h3 id="instructions-heading">Instructions</h3>
        <p>{recipe.instructions}</p>
      </section>
    </section>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeItem;
