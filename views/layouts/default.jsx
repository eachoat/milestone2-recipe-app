import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Default({ title, children }) {
    useEffect(() => {
        document.title = title || 'Default Page Title'; // Provide a default title
    }, [title]); // This effect runs whenever the title prop changes

    return (
        <React.Fragment>
            <header>
                <h1><Link to="/recipe">Recipes</Link></h1>
            </header>
            <div className="wrapper">
                <div className="container">
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
}

// Using PropTypes to validate props
Default.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Default;
