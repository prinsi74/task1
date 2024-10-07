import React, { useState, useEffect } from 'react';

const GeolocationTracker = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    
    const handlePosition = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

  
    const handleError = (err) => {
      setError('Unable to retrieve your location');
      console.error(err);
    };


    const watchId = navigator.geolocation.watchPosition(handlePosition, handleError);

  
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Geolocation Tracker</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <>
          <p>Latitude: {latitude ? latitude : 'Fetching...'}</p>
          <p>Longitude: {longitude ? longitude : 'Fetching...'}</p>
        </>
      )}
    </div>
  );
};

export default GeolocationTracker;
