import React, { useState, useEffect } from 'react';

function LocalStorage() {
 
  const [theme, setTheme] = useState('light'); 


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []); 

 
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme; 
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Theme Switcher</h2>
      <button onClick={toggleTheme} style={buttonStyle}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}


const buttonStyle = {
  padding: '10px 15px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: '#fff',
  transition: 'background-color 0.3s ease',
};


buttonStyle[':hover'] = {
  backgroundColor: '#0056b3',
};

export default LocalStorage;
