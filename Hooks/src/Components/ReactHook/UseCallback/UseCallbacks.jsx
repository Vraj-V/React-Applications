import React, { useState, useCallback } from 'react';
import Counter from './Counter';

const useCallbacks = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('');

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [count]);
  
  return (
    <>
      <Counter count={count} onIncrement={increment} />
      <input onChange={(e) => setMsg(e.target.value)} />
    </>
  );
};

export default useCallbacks;
