import React, { useState, useEffect } from 'react';

function SearchFilter() {
  const sampleData = [
    'Apple',   'Banana',    'Orange',
    'Grapes',  'Mango',   'Pineapple',
    'Strawberry',' Avocado', 'Watermelon',
    'Kiwi',      'Berry',    'Blueberry', 
    'Cherry',  'Lemon',     ' Apricot', 
    'Figs', 'Plum', 'Papaya', 'Grapefruit'

  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(sampleData);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

 
    return () => {
      clearTimeout(handle);
    };
  }, [searchTerm]);

  
  useEffect(() => {
    const filteredResults = sampleData.filter(item =>
      item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [debouncedSearchTerm]);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
