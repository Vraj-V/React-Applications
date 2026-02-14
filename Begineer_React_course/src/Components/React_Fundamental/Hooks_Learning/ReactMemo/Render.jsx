import React,{useState} from 'react';
import Count from './Count';

const Render = () => {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('');

    return (
        <div>
            <Count count={count} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        
            <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
        </div>
    )
}
export default Render;