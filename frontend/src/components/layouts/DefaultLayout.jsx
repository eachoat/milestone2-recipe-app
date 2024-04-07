import React from 'react';
import { Link } from 'react-router-dom';

function DefaultLayout({ children }) {
  return (
    <>
      <header>
        {/* Navigation Bar */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/add-recipe">Add Recipe</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        {/* Footer Content */}
        <p>© 2023 My Recipe App</p>
      </footer>
    </>
  );
}

export default DefaultLayout;
