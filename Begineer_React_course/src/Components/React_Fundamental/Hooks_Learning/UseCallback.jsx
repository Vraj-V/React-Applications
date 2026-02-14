import React,{useCallback,useEffect,useState} from 'react';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(10);
    
    const increment =useCallback(()=>{
        setCount(count + 1);
    },[count]);

    
    useEffect(()=>{
        console.log("useEffect called");
    },[increment]);

    return (
        <div>
            <h1>{count}</h1>
            <h2>{otherState}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={()=>setOtherState(otherState + 1)}>Increment Other State</button>
        </div>
    );
};

export default UseCallback;