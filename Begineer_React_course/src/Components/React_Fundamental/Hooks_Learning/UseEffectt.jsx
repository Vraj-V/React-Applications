import React,{useState,useEffect} from 'react';

const UseEffectt = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect called');
    }, [count ]);
    return (
        <div>
            <h1>UseEffect Hook</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button>Decrement</button>

            </div>
    )
}
export default UseEffectt;