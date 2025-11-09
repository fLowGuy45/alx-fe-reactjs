import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      border: '2px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '250px',
      margin: '20px auto',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'
    }}>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
