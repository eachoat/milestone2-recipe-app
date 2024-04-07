import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ links }) => (
  <nav>
    {links.map((link, index) => (
      <React.Fragment key={link.path}>
        {index > 0 && ' | '}
        <Link to={link.path}>{link.text}</Link>
      </React.Fragment>
    ))}
  </nav>
);

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

const Footer = ({ copyrightText }) => (
  <footer>
    <p>{copyrightText}</p>
  </footer>
);

Footer.propTypes = {
  copyrightText: PropTypes.string
};

Footer.defaultProps = {
  copyrightText: '© 2023 My Recipe App'
};

function DefaultLayout({ children, navLinks, footerText }) {
  return (
    <>
      <header>
        <NavBar links={navLinks} />
      </header>

      <main>{children}</main>

      <Footer copyrightText={footerText} />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  footerText: PropTypes.string
};

DefaultLayout.defaultProps = {
  navLinks: [
    { path: '/', text: 'Home' },
    { path: '/add-recipe', text: 'Add Recipe' }
  ],
  footerText: '© 2023 My Recipe App'
};

export default DefaultLayout;
