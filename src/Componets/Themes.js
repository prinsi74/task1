import React, { useState } from 'react';

function Themes() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-container ${theme}`}>
     
      <h1 className="text-center">Dark/Light Mode Toggle</h1>

      
      <button className="btn-toggle" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <p className="text-center">
        This is an example of a {theme === 'light' ? 'Light' : 'Dark'} Theme!
      </p>
    </div>
  );
}

export default Themes;
