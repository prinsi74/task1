import React, { useState, useEffect } from 'react';

const Status = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Handler to update the state when the user goes online
    const handleOnline = () => {
      setIsOnline(true);
    };

    // Handler to update the state when the user goes offline
    const handleOffline = () => {
      setIsOnline(false);
    };

    // Add event listeners for online and offline events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>User's Online/Offline Status</h2>
      {isOnline ? (
        <p style={{ color: 'green' }}>You are Online</p>
      ) : (
        <p style={{ color: 'red' }}>You are Offline</p>
      )}
    </div>
  );
};

export default Status;

