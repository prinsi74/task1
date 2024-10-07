import React, { useState } from 'react';

function CharList() {

  const [Value, setValue] = useState('');

  return (
    <div className="character-counter-container" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 className="text-center">Character Counter</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '10px',
        }}
      />
      
      <p>
        Character Count: <h2>{Value.length}</h2>
      </p>
    </div>
  );
}

export default CharList;
