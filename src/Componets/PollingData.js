import React, { useState, useEffect } from 'react';

const PollingData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your API
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData(); 

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

   
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Polling Data from API</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li> 
          ))}
        </ul>
      )}
    </div>
  );
};

export default PollingData;
