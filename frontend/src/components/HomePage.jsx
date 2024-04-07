import React from 'react';
import DefaultLayout from './layouts/DefaultLayout';

const HomePage = () => {
  return (
    <DefaultLayout>
      <h1>Guadalupe's Recipe App</h1>
      {/* Other content */}
      <p>Discover and share your favorite recipes!</p>
      <section>
        <article>
          <h2>Featured Recipe</h2>
          <p>This week's featured recipe: Grandma's Apple Pie.</p>
          {/* More details about the Featured Recipe */}
        </article>

        <article>
          <h2>Latest Recipes</h2>
          <ul>
            {/* Placeholder for recipe list - could be populated from state or props */}
            <li>Chocolate Brownie</li>
            <li>Margherita Pizza</li>
            <li>Classic Burger</li>
          </ul>
        </article>
      </section>
    </DefaultLayout>
  );
};

export default HomePage;
