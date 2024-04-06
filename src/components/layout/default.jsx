import React from 'react';

function Default({ children, title }) {
  return (
    <div className="wrapper">
      {/* Content that you want to render inside <body> */}
      {children}
    </div>
  );
}


export default Default;
