import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

 
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isActive, seconds]);

  const handleStartStop = () => {
    setIsActive(!isActive); 
  };

  const handleReset = () => {
    setIsActive(false); 
    setSeconds(0);
  };

  return (
    <div className="timer-container" style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Timer</h2>
      <p style={{ fontSize: '24px' }}>{seconds} seconds</p>
      <button onClick={handleStartStop} className='btn btn-primary mx-5'>
        {isActive ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset} className='btn btn-warning  ' >
        Reset
      </button>
    </div>
  );
}






export default Timer;
