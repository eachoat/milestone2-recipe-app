const React = require('react');

function Default({ children, title }) {
  return (
    <html>
      <head>
        <title>{title || 'Default'}</title>
        </head>
      <body>
        <div className="wrapper">
          <header>
            <h1><a href="/recipes">Recipe App</a></h1>
          </header>
          <div className="container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

module.exports = Default;
