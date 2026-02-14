import { createContext, useState, useContext } from "react";

const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Counter />
    </CounterContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
