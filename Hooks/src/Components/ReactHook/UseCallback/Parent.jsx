import React, { useState } from 'react';
import Counter from './Counter';

const Parent = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('');

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Counter count={count} onIncrement={increment} />
      <input onChange={(e) => setMsg(e.target.value)} />
    </>
  );
};

export default Parent;
