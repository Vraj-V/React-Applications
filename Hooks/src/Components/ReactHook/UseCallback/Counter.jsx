import React from "react";

const Counter = React.memo(({ count, onIncrement }) => {
  console.log('Counter re-rendered');
  
  return(
    <>
     <h4>{count}</h4>
     <button onClick={onIncrement}>Count: {count}</button>
     </>
  );
});
export default Counter;