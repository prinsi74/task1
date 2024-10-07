import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 
  return (
    <div className="fetch-data-container" style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Fetched Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {data.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No data found.</p>
      )}
    </div>
  );
}

export default FetchData;
