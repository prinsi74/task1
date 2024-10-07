import React, { useState, useEffect } from 'react';

function Timer2() {
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


  const startTimer = () => {
    setIsActive(true);
  };

 
  const stopTimer = () => {
    setIsActive(false);
  };

 
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Timer</h2>
      <p>{seconds} seconds</p>
      <button onClick={startTimer} style={buttonStyle} disabled={isActive}>
        Start
      </button>
      <button onClick={stopTimer} style={buttonStyle} disabled={!isActive}>
        Stop
      </button>
      <button onClick={resetTimer} style={buttonStyle}>
        Reset
      </button>
    </div>
  );
}


const buttonStyle = {
  margin: '5px',
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

export default Timer2;
