import React, { useState } from 'react';
import './Card.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2 style={{ color: '#2a9d8f', marginBottom: 16 }}>Interactive Counter</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            background: '#e76f51',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            padding: '8px 16px',
            fontSize: 18,
            cursor: 'pointer'
          }}
        >-</button>
        <input
          type="text"
          value={count}
          readOnly
          style={{
            width: 50,
            textAlign: 'center',
            fontSize: 18,
            border: '1px solid #ccc',
            borderRadius: 4,
            margin: '0 8px'
          }}
        />
        <button
          onClick={() => setCount(count + 1)}
          style={{
            background: '#2a9d8f',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            padding: '8px 16px',
            fontSize: 18,
            cursor: 'pointer'
          }}
        >+</button>
      </div>
    </div>
  );
}

export default Counter;