import React from 'react';
import './style.css';
import { useState } from 'react';
export default function App() {
  const [name, setName] = useState('kc');
  return (
    <div>
      <h1>hello {name}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setName('Students')}> Change Name</button>
    </div>
  );
}
