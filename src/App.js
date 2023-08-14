import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import Child from './Child.jsx';
export default function App() {
  const [name, setName] = useState('Harsh');
  const age = 12;
  const address = 'mumbai';

  useEffect(() => {
    console.log('Effect called');
  }, [name]);
  return (
    <div>
      <h1>hello {name}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setName('Dattatray')}> Change Name</button>
      <Child age={age} address={address} />
    </div>
  );
}
